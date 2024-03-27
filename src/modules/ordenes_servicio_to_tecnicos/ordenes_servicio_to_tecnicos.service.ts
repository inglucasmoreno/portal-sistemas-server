import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdenesServicioToTecnicos, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OrdenesServicioToTecnicosService {

    constructor(private prisma: PrismaService) { }

    // OrdenToTecnico por ID
    async getId(id: number): Promise<OrdenesServicioToTecnicos> {

        const ordenToTecnico = await this.prisma.ordenesServicioToTecnicos.findFirst({
            where: { id },
            include: {
                ordenServicio: true,
                tecnico: true,
                creatorUser: true,
            }
        })

        if (!ordenToTecnico) throw new NotFoundException('La ordenToTecnico no existe');
        return ordenToTecnico;

    }

    // Listar ordenes to tecnicos
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

        // Total de ordenes to tecnicos
        const totalItems = await this.prisma.ordenesServicioToTecnicos.count({ where });

        // Listado de ordenes to tecnicos
        const ordenesToTecnicos = await this.prisma.ordenesServicioToTecnicos.findMany({
            take: Number(itemsPorPagina),
            include: {
                tecnico: true,
                ordenServicio: true,
                creatorUser: true,
            },
            // skip: (pagina - 1) * itemsPorPagina,
            orderBy,
            where
        })

        return {
            ordenesToTecnicos,
            totalItems,
        };

    }

    // Crear orden to tecnico
    async insert(createData: Prisma.OrdenesServicioToTecnicosCreateInput): Promise<OrdenesServicioToTecnicos> {
        createData.observaciones = createData.observaciones?.toLocaleUpperCase().trim();
        return await this.prisma.ordenesServicioToTecnicos.create({ data: createData, include: { 
            tecnico: true,
            ordenServicio: true,
            creatorUser: true,
        } });
    }

    // Actualizar orden to tecnico
    async update(id: number, updateData: Prisma.OrdenesServicioToTecnicosUpdateInput): Promise<OrdenesServicioToTecnicos> {

        const ordenToTecnicoDB = await this.prisma.ordenesServicioToTecnicos.findFirst({ where: { id } });

        // Verificacion: La orden to tecnico no existe
        if (!ordenToTecnicoDB) throw new NotFoundException('La orden to tecnico no existe');

        return await this.prisma.ordenesServicioToTecnicos.update({
            where: { id },
            data: updateData,
            include: {
                tecnico: true,
                ordenServicio: true,
                creatorUser: true,
            }
        })

    }

}
