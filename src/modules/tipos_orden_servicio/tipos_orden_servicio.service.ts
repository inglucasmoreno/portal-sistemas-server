import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, TiposOrdenServicio } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TiposOrdenServicioService {

    constructor(private prisma: PrismaService) { }

    // Tipo por ID
    async getId(id: number): Promise<TiposOrdenServicio> {
  
      const tipo = await this.prisma.tiposOrdenServicio.findFirst({
        where: { id },
        include: {
          creatorUser: true,
        }
      })
  
      if (!tipo) throw new NotFoundException('El tipo no existe');
      return tipo;
  
    }
  
    // Listar tipos
    async getAll({
      columna = 'descripcion',
      direccion = 'desc',
      activo = '',
      parametro = '',
      pagina = 1,
      itemsPorPagina = 10000
    }: any): Promise<any> {
  
      // Ordenando datos
      let where = {};
      let orderBy = {};
      orderBy[columna] = direccion;
    
      // Filtro por activo
      if (activo !== '') where = { ...where, activo: activo === 'true' ? true : false };
  
      // where.OR.push({
      //   descripcion: {
      //     contains: parametro.toUpperCase()
      //   }
      // })
  
      // Total de tipos
      const totalItems = await this.prisma.tiposOrdenServicio.count({ where });
  
      // Listado de tipos
      const tipos = await this.prisma.tiposOrdenServicio.findMany({
        take: Number(itemsPorPagina),
        include: {
          creatorUser: true,
        },
        // skip: (pagina - 1) * itemsPorPagina,
        orderBy,
        where
      })
  
      return {
        tipos,
        totalItems,
      };
  
    }
  
    // Crear tipo
    async insert(createData: Prisma.TiposOrdenServicioCreateInput): Promise<TiposOrdenServicio> {
  
      // Uppercase
      createData.descripcion = createData.descripcion?.toLocaleUpperCase().trim();
  
      // Verificacion: Descripcion repetida
      let tipoDB = await this.prisma.tiposOrdenServicio.findFirst({ where: { descripcion: createData.descripcion } });
      if (tipoDB) throw new NotFoundException('El tipo ya se encuentra cargado');
  
      return await this.prisma.tiposOrdenServicio.create({ data: createData, include: { creatorUser: true } });
  
    }
  
    // Actualizar tipo
    async update(id: number, updateData: Prisma.TiposOrdenServicioUpdateInput): Promise<TiposOrdenServicio> {
  
      const { descripcion } = updateData;
  
      // Uppercase
      updateData.descripcion = updateData.descripcion?.toString().toLocaleUpperCase().trim();
  
      const tipoDB = await this.prisma.tiposOrdenServicio.findFirst({ where: { id } });
  
      // Verificacion: El tipo no existe
      if (!tipoDB) throw new NotFoundException('El tipo no existe');
  
      // Verificacion: Tipo repetida
      if (descripcion) {
        const tipoRepetido = await this.prisma.tiposOrdenServicio.findFirst({ where: { descripcion: descripcion.toString() } })
        if (tipoRepetido && tipoRepetido.id !== id) throw new NotFoundException('El tipo ya se encuentra cargado');
      }
  
      return await this.prisma.tiposOrdenServicio.update({
        where: { id },
        data: updateData,
        include: {
          creatorUser: true
        }
      })
  
    }

}
