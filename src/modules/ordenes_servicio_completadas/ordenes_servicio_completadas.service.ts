import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdenesServicioCompletadas, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdenesServicioCompletadasService {

    constructor(private prisma: PrismaService) { }

    // OrdenCompletada por ID
    async getId(id: number): Promise<OrdenesServicioCompletadas> {

        const ordenCompletada = await this.prisma.ordenesServicioCompletadas.findFirst({
            where: { id },
            include: {
                creatorUser: true,
            }
        })

        if (!ordenCompletada) throw new NotFoundException('La orden completada no existe');
        return ordenCompletada;

    }

    // Listar ordenes completadas
    async getAll({
        columna = 'id',
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

        // Total de ordenes completadas
        const totalItems = await this.prisma.ordenesServicioCompletadas.count({ where });

        // Listado de ordenes completadas
        const ordenesCompletadas = await this.prisma.ordenesServicioCompletadas.findMany({
            take: Number(itemsPorPagina),
            include: {
                ordenServicio: true,
                creatorUser: true,
            },
            // skip: (pagina - 1) * itemsPorPagina,
            orderBy,
            where
        })

        return {
            ordenesCompletadas,
            totalItems,
        };

    }

    // Crear orden completada
    async insert(createData: Prisma.OrdenesServicioCompletadasCreateInput): Promise<OrdenesServicioCompletadas> {
        createData.observaciones = createData.observaciones?.toLocaleUpperCase().trim();
        return await this.prisma.ordenesServicioCompletadas.create({ data: createData, include: { creatorUser: true } });
    }

    // Actualizar orden completada
    async update(id: number, updateData: Prisma.OrdenesServicioCompletadasUpdateInput): Promise<OrdenesServicioCompletadas> {

        // Uppercase
        updateData.observaciones = updateData.observaciones?.toString().toLocaleUpperCase().trim();

        const ordenCompletadaDB = await this.prisma.ordenesServicioCompletadas.findFirst({ where: { id } });

        // Verificacion: La orden completada no existe
        if (!ordenCompletadaDB) throw new NotFoundException('La orden completada no existe');

        return await this.prisma.ordenesServicioCompletadas.update({
            where: { id },
            data: updateData,
            include: {
                ordenServicio: true,
                creatorUser: true
            }
        })

    }

}
