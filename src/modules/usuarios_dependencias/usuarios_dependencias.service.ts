import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, UsuariosDependencias } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsuariosDependenciasService {

  constructor(private prisma: PrismaService) { }

  // Relacion por ID
  async getId(id: number): Promise<UsuariosDependencias> {

    const relacion = await this.prisma.usuariosDependencias.findFirst({
      where: { id },
      include: {
        usuario: true,
        dependencia: true,
        creatorUser: true,
      }
    })

    if (!relacion) throw new NotFoundException('La relacion no existe');
    return relacion;

  }

  // Listar dependencias
  async getAll({
    columna = 'createdAt',
    direccion = 'desc',
    activo = '',
    parametro = '',
    pagina = 1,
    itemsPorPagina = 10000
  }: any): Promise<any> {

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

    // Total de relaciones
    const totalItems = await this.prisma.usuariosDependencias.count({ where });

    // Listado de relaciones
    const relaciones = await this.prisma.usuariosDependencias.findMany({
      take: Number(itemsPorPagina),
      include: {
        usuario: true,
        dependencia: true,
        creatorUser: true,
      },
      // skip: (pagina - 1) * itemsPorPagina,
      orderBy,
      where
    })

    return {
      relaciones,
      totalItems,
    };

  }

  // Crear relacion
  async insert(createData: any): Promise<UsuariosDependencias> {

    // Verificar si la dependencia ya existe para ese usuario
    const relacionExistente = await this.prisma.usuariosDependencias.findFirst({
      where: {
        usuarioId: createData.usuarioId,
        dependenciaId: createData.dependenciaId
      }
    })

    if(relacionExistente) throw new NotFoundException('La dependencia ya esta asignada');

    return await this.prisma.usuariosDependencias.create({
      data: createData, include: {
        usuario: true,
        dependencia: true,
        creatorUser: true,
      }
    });
    
  }

  // Actualizar relacion
  async update(id: number, updateData: Prisma.UsuariosDependenciasUpdateInput): Promise<UsuariosDependencias> {
    return await this.prisma.usuariosDependencias.update({
      where: { id },
      data: updateData,
      include: {
        usuario: true,
        dependencia: true,
        creatorUser: true,
      }
    })
  }

  // Eliminar relacion
  async delete(id: number): Promise<UsuariosDependencias> {
    return await this.prisma.usuariosDependencias.delete(
      {
        where: { id },
        include: {
          usuario: true,
          dependencia: true,
          creatorUser: true,
        }
      }
    )
  }

}
