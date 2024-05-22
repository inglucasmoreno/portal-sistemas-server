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
        tecnico = '',
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

        // Filtro por tecnico
        if (tecnico !== '') where = { ...where, tecnicoId: Number(tecnico) };

        if (columna === 'ordenServicio.dependencia.nombre') {
            orderBy = {
                ordenServicio: {
                    dependencia: {
                        nombre: direccion
                    }
                }
            }
        }
        
        if (columna === 'ordenServicio.tipoOrdenServicio.descripcion') {
            orderBy = {
                ordenServicio: {
                    tipoOrdenServicio: {
                        descripcion: direccion
                    }
                }
            }
        }

        // Filtro por parametro
        if (parametro !== '') {
            where = {
                ...where,
                OR: [
                    { id: Number(parametro) ? Number(parametro) : -1 },
                    { ordenServicio: { dependencia: { nombre: { contains: parametro } } } },
                    { ordenServicio: { tipoOrdenServicio: { descripcion: { contains: parametro } } } },
                ]
            }
        }

        // Total de ordenes to tecnicos
        const totalItems = await this.prisma.ordenesServicioToTecnicos.count({ where });

        // Listado de ordenes to tecnicos
        const ordenesToTecnicos = await this.prisma.ordenesServicioToTecnicos.findMany({
            take: Number(itemsPorPagina),
            include: {
                tecnico: true,
                ordenServicio: {
                    include: {
                        dependencia: true,
                        tipoOrdenServicio: true,
                    }
                },
                creatorUser: true,
            },
            skip: (pagina - 1) * itemsPorPagina,
            orderBy,
            where
        })

        return {
            ordenesToTecnicos,
            totalItems,
        };

    }

    // Crear orden to tecnico
    async insert(createData: any): Promise<any> {

        const { ordenServicioId, tecnicos, creatorUserId } = createData;

        // Se agregan tecnicos a la orden
        tecnicos.forEach(async (tecnico: any) => {
            await this.prisma.ordenesServicioToTecnicos.create({
                data: {
                    ordenServicioId: Number(ordenServicioId),
                    tecnicoId: tecnico.id,
                    creatorUserId
                }
            });
        });

        // Se coloca la orden de servicio en estado "En proceso"
        await this.prisma.ordenesServicio.update({
            where: { id: Number(ordenServicioId) },
            data: {
                estadoOrden: 'En proceso',
                fechaEnProceso: new Date()
            }
        });

        return '';

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
