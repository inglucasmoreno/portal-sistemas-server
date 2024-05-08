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
      where = {...where, dependenciaId: Number(dependencia)}
    }

    // Filtro por estado
    if (estado !== '') {
      where = {...where, estadoOrden: estado}
    }

    // where.OR.push({
    //   descripcion: {
    //     contains: parametro.toUpperCase()
    //   }
    // })

    // Ordenando datos
    let orderBy = {};
    orderBy[columna] = direccion;

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
    createData.observacionSolicitud = createData.observacionSolicitud?.toString().toUpperCase();
    createData.motivoRechazo = createData?.motivoRechazo?.toString().toUpperCase();
    return await this.prisma.ordenesServicio.create({ data: createData, include: { creatorUser: true } });
  }

  // Actualizar orden
  async update(id: number, updateData: any): Promise<OrdenesServicio> {

    // Adaptando valores
    updateData.observacionSolicitud = updateData?.observacionSolicitud?.toString().toUpperCase();
    updateData.motivoRechazo = updateData?.motivoRechazo?.toString().toUpperCase();
    if(updateData.fechaCierre) updateData.fechaCierre = new Date(updateData.fechaCierre);
    
    const ordenDB = await this.prisma.ordenesServicio.findFirst({ where: { id } });

    // Verificacion: La orden no existe
    if (!ordenDB) throw new NotFoundException('El orden no existe');

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
