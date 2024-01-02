import { Injectable, NotFoundException } from '@nestjs/common';
import { Dependencias, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DependenciasService {

  constructor(private prisma: PrismaService) { }

  // Dependencia por ID
  async getId(id: number): Promise<Dependencias> {

    const dependencia = await this.prisma.dependencias.findFirst({
      where: { id },
      include: {
        creatorUser: true,
      }
    })

    if (!dependencia) throw new NotFoundException('La dependencia no existe');
    return dependencia;

  }

  // Listar dependencias
  async getAll({
    columna = 'nombre',
    direccion = 'desc',
    activo = '',
    parametro = '',
    pagina = 1,
    itemsPorPagina = 10000
  }: any): Promise<any> {

    // Ordenando datos
    let orderBy = {};
    orderBy[columna] = direccion;

    let where: any = {
      activo: activo === 'true' ? true : false
    };

    // where.OR.push({
    //   descripcion: {
    //     contains: parametro.toUpperCase()
    //   }
    // })

    // Total de dependencias
    const totalItems = await this.prisma.dependencias.count({ where });

    // Listado de dependencias
    const dependencias = await this.prisma.dependencias.findMany({
      take: Number(itemsPorPagina),
      include: {
        creatorUser: true,
      },
      // skip: (pagina - 1) * itemsPorPagina,
      orderBy,
      // where: {
      //   activo: false
      // }
    })

    return {
      dependencias,
      totalItems,
    };

  }

  // Crear dependencia
  async insert(createData: Prisma.DependenciasCreateInput): Promise<Dependencias> {

    // Uppercase
    createData.nombre = createData.nombre?.toLocaleUpperCase().trim();

    // Verificacion: Nombre repetido
    let dependenciaDB = await this.prisma.dependencias.findFirst({ where: { nombre: createData.nombre } });
    if (dependenciaDB) throw new NotFoundException('La dependencia ya se encuentra cargada');

    return await this.prisma.dependencias.create({ data: createData, include: { creatorUser: true } });

  }

  // Actualizar dependencia
  async update(id: number, updateData: Prisma.DependenciasUpdateInput): Promise<Dependencias> {

    const { nombre } = updateData;

    // Uppercase
    updateData.nombre = updateData.nombre?.toString().toLocaleUpperCase().trim();

    const dependenciaDB = await this.prisma.dependencias.findFirst({ where: { id } });

    // Verificacion: La dependencia no existe
    if (!dependenciaDB) throw new NotFoundException('La dependencia no existe');

    // Verificacion: Dependencia repetida
    if (nombre) {
      const dependenciaRepetida = await this.prisma.dependencias.findFirst({ where: { nombre: nombre.toString() } })
      if (dependenciaRepetida && dependenciaRepetida.id !== id) throw new NotFoundException('La dependencia ya se encuentra cargada');
    }

    return await this.prisma.dependencias.update({
      where: { id },
      data: updateData,
      include: {
        creatorUser: true
      }
    })

  }


}
