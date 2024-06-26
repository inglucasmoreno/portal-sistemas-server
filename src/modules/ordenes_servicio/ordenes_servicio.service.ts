import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdenesServicio, Prisma, TiposOrdenServicio, OrdenesServicioToTecnicos } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdenesServicioService {

  constructor(private prisma: PrismaService) { }

  // Orden por ID
  async getId(id: number): Promise<OrdenesServicio> {

    const orden = await this.prisma.ordenesServicio.findFirst({
      where: { id },
      include: {
        usuario: true,
        dependencia: true,
        tipoOrdenServicio: true,
        ordenesServicioTecnico: {
          include: {
            tecnico: true
          }
        },
        ordenesServicioHistorial: {
          orderBy: { createdAt: 'desc' },
          include: {
            OrdenesServicioHistorialToTecnicos: {
              include: {
                tecnico: true
              }
            },
            creatorUser: true
          }
        },
        creatorUser: true,
      }
    })

    if (!orden) throw new NotFoundException('La orden no existe');
    return orden;

  }

  // Listar ordenes
  async getAll({
    columna = 'createdAt',
    direccion = 'desc',
    activo = '',
    parametro = '',
    dependencia = '',
    estado = '',
    pagina = 1,
    itemsPorPagina = 10000
  }: any): Promise<any> {

    let where: any = {};

    // Filtro por dependencia
    if (dependencia !== '') {
      where = { ...where, dependenciaId: Number(dependencia) }
    }

    // Filtro por estado
    if (estado !== '') {
      where = { ...where, estadoOrden: estado }
    }

    // Filtro por parametro
    if (parametro !== '') {
      where = {
        ...where,
        OR: [
          { id: Number(parametro) ? Number(parametro) : -1 },
          { dependencia: { nombre: { contains: parametro } } },
          { tipoOrdenServicio: { descripcion: { contains: parametro } } },
        ]
      }
    }
    
    // Ordenando datos
    let orderBy = {};
    orderBy[columna] = direccion;

    if (columna === 'dependencia.nombre') {
      orderBy = {
        dependencia: {
          nombre: direccion
        }
      }
    }

    if (columna === 'tipoOrdenServicio.descripcion') {
      orderBy = {
        tipoOrdenServicio: {
          descripcion: direccion
        }
      }
    }

    // Total de ordenes
    const totalItems = await this.prisma.ordenesServicio.count({ where });

    // Listado de ordenes
    const ordenes = await this.prisma.ordenesServicio.findMany({
      take: Number(itemsPorPagina),
      include: {
        usuario: true,
        dependencia: true,
        tipoOrdenServicio: true,
        ordenesServicioTecnico: {
          include: {
            tecnico: true
          }
        },
        ordenesServicioHistorial: {
          orderBy: { createdAt: 'desc' },
          include: {
            creatorUser: true
          }
        },
        creatorUser: true,
      },
      skip: (pagina - 1) * itemsPorPagina,
      orderBy,
      where
    })

    return {
      ordenes,
      totalItems,
    };

  }

  // Crear orden
  async insert(createData: Prisma.OrdenesServicioCreateInput): Promise<OrdenesServicio> {
    createData.comentariosSolucion = createData.comentariosSolucion?.toString().toUpperCase();
    createData.observacionSolicitud = createData?.observacionSolicitud?.toString().toUpperCase();
    createData.motivoSinSolucion = createData?.motivoSinSolucion?.toString().toUpperCase();
    createData.motivoPendiente = createData?.motivoPendiente?.toString().toUpperCase();
    return await this.prisma.ordenesServicio.create({ data: createData, include: { creatorUser: true } });
  }

  // Actualizar orden
  async update(id: number, updateData: any): Promise<OrdenesServicio> {
    
    // Adaptando valores
    updateData.comentariosSolucion = updateData?.comentariosSolucion?.toString().toUpperCase();
    updateData.observacionSolicitud = updateData?.observacionSolicitud?.toString().toUpperCase();
    updateData.motivoSinSolucion = updateData?.motivoSinSolucion?.toString().toUpperCase();
    updateData.motivoPendiente = updateData?.motivoPendiente?.toString().toUpperCase();
    if (updateData.fechaPendiente) updateData.fechaPendiente = new Date(updateData.fechaPendiente);
    if (updateData.fechaCierre) updateData.fechaCierre = new Date(updateData.fechaCierre);
    if (updateData.fechaEnProceso) updateData.fechaEnProceso = new Date(updateData.fechaEnProceso);
    
    console.log(updateData);

    const ordenDB = await this.prisma.ordenesServicio.findFirst({ where: { id } });

    // Verificacion: La orden no existe
    if (!ordenDB) throw new NotFoundException('El orden no existe');

    if(updateData.estadoOrden === 'Completada' && ordenDB.estadoOrden === 'Completada' ){
      throw new NotFoundException('La orden ya fue encuentra completada');
    }

    if(updateData.estadoOrden === 'Sin solucion' && ordenDB.estadoOrden === 'Sin solucion' ){
      throw new NotFoundException('La orden ya fue encuentra sin solucion');
    }

    if(updateData.estadoOrden === 'En proceso' && ordenDB.estadoOrden === 'En proceso' ){
      throw new NotFoundException('La orden ya fue encuentra en proceso de solucion');
    }

    if(updateData.estadoOrden === 'Pendiente' && ordenDB.estadoOrden === 'Pendiente' ){
      throw new NotFoundException('La orden ya fue encuentra pendiente');
    }

    if (updateData.estadoOrden === 'Completada' || updateData.estadoOrden === 'Sin solucion' || updateData.estadoOrden === 'Pendiente') {
      await this.prisma.ordenesServicioToTecnicos.updateMany({
        where: {
          ordenServicioId: id
        },
        data: {
          activo: false
        }
      })
    }

    return await this.prisma.ordenesServicio.update({
      where: { id },
      data: updateData,
      include: {
        usuario: true,
        dependencia: true,
        tipoOrdenServicio: true,
        ordenesServicioHistorial: {
          orderBy: { createdAt: 'desc' },
          include: {
            creatorUser: true
          }
        },
        creatorUser: true,
      },
    })

  }

}
