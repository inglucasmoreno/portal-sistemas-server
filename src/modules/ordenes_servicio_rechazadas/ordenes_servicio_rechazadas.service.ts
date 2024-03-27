import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdenesServicioRechazadas, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdenesServicioRechazadasService {

    constructor(private prisma: PrismaService) { }

    // OrdenRechazada por ID
    async getId(id: number): Promise<OrdenesServicioRechazadas> {

        const ordenRechazada = await this.prisma.ordenesServicioRechazadas.findFirst({
            where: { id },
            include: {
                creatorUser: true,
            }
        })

        if (!ordenRechazada) throw new NotFoundException('La orden rechazada no existe');
        return ordenRechazada;

    }

    // Listar ordenes rechazadas
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

        // Total de ordenes rechazadas
        const totalItems = await this.prisma.ordenesServicioRechazadas.count({ where });

        // Listado de ordenes rechazadas
        const ordenesRechazadas = await this.prisma.ordenesServicioRechazadas.findMany({
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
            ordenesRechazadas,
            totalItems,
        };

    }

    // Crear orden rechazada
    async insert(createData: Prisma.OrdenesServicioRechazadasCreateInput): Promise<OrdenesServicioRechazadas> {
        createData.motivo = createData.motivo?.toLocaleUpperCase().trim();
        return await this.prisma.ordenesServicioRechazadas.create({ data: createData, include: { creatorUser: true } });
    }

    // Actualizar orden rechazada
    async update(id: number, updateData: Prisma.OrdenesServicioRechazadasUpdateInput): Promise<OrdenesServicioRechazadas> {

        // Uppercase
        updateData.motivo = updateData.motivo?.toString().toLocaleUpperCase().trim();

        const ordenRechazadaDB = await this.prisma.ordenesServicioRechazadas.findFirst({ where: { id } });

        // Verificacion: La orden rechazada no existe
        if (!ordenRechazadaDB) throw new NotFoundException('La orden rechazada no existe');

        return await this.prisma.ordenesServicioRechazadas.update({
            where: { id },
            data: updateData,
            include: {
                ordenServicio: true,
                creatorUser: true
            }
        })

    }

}
