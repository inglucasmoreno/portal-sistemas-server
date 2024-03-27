import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { OrdenesServicioCompletadasService } from './ordenes_servicio_completadas.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('ordenes-servicio-completadas')
export class OrdenesServicioCompletadasController {

    constructor(private readonly ordenesServicioCompletadasService: OrdenesServicioCompletadasService) { }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getId(@Res() res, @Param('id') id: number): Promise<any> {

        const ordenCompletada = await this.ordenesServicioCompletadasService.getId(id);

        return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Orden completada obtenida correctamente',
            ordenCompletada
        })

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(@Res() res, @Query() query): Promise<any> {

        const { ordenesCompletadas, totalItems } = await this.ordenesServicioCompletadasService.getAll(query);

        return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Orden completada obtenida correctamente',
            ordenesCompletadas,
            totalItems
        })

    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async insert(@Res() res, @Body() createData: Prisma.OrdenesServicioCompletadasCreateInput): Promise<any> {

        const ordenCompletada = await this.ordenesServicioCompletadasService.insert(createData);

        return res.status(HttpStatus.CREATED).json({
            success: true,
            message: 'Orden completada creada correctamente',
            ordenCompletada
        })

    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(@Res() res, @Param('id') id: number, @Body() dataUpdate: Prisma.OrdenesServicioCompletadasUpdateInput) {

        const ordenCompletada = await this.ordenesServicioCompletadasService.update(id, dataUpdate);

        res.status(HttpStatus.OK).json({
            success: true,
            message: 'Orden completada actualizada correctamente',
            ordenCompletada
        })

    }

}
