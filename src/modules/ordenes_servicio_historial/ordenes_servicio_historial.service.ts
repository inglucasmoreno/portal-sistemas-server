import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdenesServicioHistorial, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdenesServicioHistorialService {

    constructor(private prisma: PrismaService) { }

    // Relacion por ID
    async getId(id: number): Promise<OrdenesServicioHistorial> {

        const relacion = await this.prisma.ordenesServicioHistorial.findFirst({
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
        columna = 'nombre',
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
        const totalItems = await this.prisma.ordenesServicioHistorial.count({ where });

        // Listado de relaciones
        const relaciones = await this.prisma.ordenesServicioHistorial.findMany({
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

    // Crear relacion
    async insert(createData: Prisma.OrdenesServicioHistorialCreateInput): Promise<OrdenesServicioHistorial> {
        createData.motivoRechazo = createData.motivoRechazo?.toString().toUpperCase();
        return await this.prisma.ordenesServicioHistorial.create({
            data: createData,
            include: { creatorUser: true }
        });
    }

    // Actualizar relacion
    async update(id: number, updateData: Prisma.OrdenesServicioHistorialUpdateInput): Promise<OrdenesServicioHistorial> {

        updateData.motivoRechazo = updateData.motivoRechazo?.toString().toUpperCase();

        const relacionDB = await this.prisma.ordenesServicioHistorial.findFirst({ where: { id } });

        // Verificacion: La relacion no existe
        if (!relacionDB) throw new NotFoundException('La relacion no existe');

        return await this.prisma.ordenesServicioHistorial.update({
            where: { id },
            data: updateData,
            include: {
                creatorUser: true
            }
        })

    }

}
