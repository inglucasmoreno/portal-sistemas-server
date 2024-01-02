import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TiposOrdenServicioService } from './tipos_orden_servicio.service';

@Controller('tipos-orden-servicio')
export class TiposOrdenServicioController {

    constructor(private readonly tiposOrdenServicioService: TiposOrdenServicioService) { }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getId(@Res() res, @Param('id') id: number): Promise<any> {

        const tipo = await this.tiposOrdenServicioService.getId(id);

        return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Tipo obtenido correctamente',
            tipo
        })

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(@Res() res, @Query() query): Promise<any> {

        const { tipos, totalItems } = await this.tiposOrdenServicioService.getAll(query);

        return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Tipo obtenido correctamente',
            tipos,
            totalItems
        })

    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async insert(@Res() res, @Body() createData: Prisma.TiposOrdenServicioCreateInput): Promise<any> {

        const tipo = await this.tiposOrdenServicioService.insert(createData);

        return res.status(HttpStatus.CREATED).json({
            success: true,
            message: 'Tipo creado correctamente',
            tipo
        })

    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(@Res() res, @Param('id') id: number, @Body() dataUpdate: Prisma.TiposOrdenServicioUpdateInput) {

        const tipo = await this.tiposOrdenServicioService.update(id, dataUpdate);

        res.status(HttpStatus.OK).json({
            success: true,
            message: 'Tipo actualizado correctamente',
            tipo
        })

    }

}
