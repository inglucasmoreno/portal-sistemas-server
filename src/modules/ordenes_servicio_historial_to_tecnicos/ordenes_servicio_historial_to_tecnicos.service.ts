import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdenesServicioHistorialToTecnicos, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdenesServicioHistorialToTecnicosService {

    constructor(private prisma: PrismaService) { }

    // Relacion por ID
    async getId(id: number): Promise<OrdenesServicioHistorialToTecnicos> {

        const relacion = await this.prisma.ordenesServicioHistorialToTecnicos.findFirst({
            where: { id },
            include: {
                creatorUser: true,
            }
        })

        if (!relacion) throw new NotFoundException('La relacion no existe');
        return relacion;

    }

    // Listar relaciones
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
        const totalItems = await this.prisma.ordenesServicioHistorialToTecnicos.count({ where });

        // Listado de relaciones
        const relaciones = await this.prisma.ordenesServicioHistorialToTecnicos.findMany({
            take: Number(itemsPorPagina),
            include: {
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

    // Crear relaciones
    async insert(createData: any): Promise<any> {

        const { ordenServicioHistorialId, tecnicos, creatorUserId } = createData;

        // Se agregan tecnicos al historial de la orden
        tecnicos.forEach(async (tecnico: any) => {
            await this.prisma.ordenesServicioHistorialToTecnicos.create({ 
                data: { 
                    ordenServicioHistorialId: Number(ordenServicioHistorialId), 
                    tecnicoId: tecnico.id,
                    creatorUserId
                } });
        });

        return '';

    }

    // Actualizar relacion
    async update(id: number, updateData: Prisma.OrdenesServicioHistorialToTecnicosUpdateInput): Promise<OrdenesServicioHistorialToTecnicos> {

        const relacionDB = await this.prisma.ordenesServicioHistorialToTecnicos.findFirst({ where: { id } });

        // Verificacion: La relacion no existe
        if (!relacionDB) throw new NotFoundException('La relacion no existe');

        return await this.prisma.ordenesServicioHistorialToTecnicos.update({
            where: { id },
            data: updateData,
            include: {
                creatorUser: true
            }
        })

    }



}
