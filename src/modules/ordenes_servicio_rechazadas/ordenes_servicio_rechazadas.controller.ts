import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { OrdenesServicioRechazadasService } from './ordenes_servicio_rechazadas.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('ordenes-servicio-rechazadas')
export class OrdenesServicioRechazadasController {

    constructor(private readonly ordenesServicioRechazadasService: OrdenesServicioRechazadasService) { }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getId(@Res() res, @Param('id') id: number): Promise<any> {

        const ordenRechazada = await this.ordenesServicioRechazadasService.getId(id);

        return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Orden rechazada obtenida correctamente',
            ordenRechazada
        })

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(@Res() res, @Query() query): Promise<any> {

        const { ordenesRechazadas, totalItems } = await this.ordenesServicioRechazadasService.getAll(query);

        return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Orden rechazada obtenida correctamente',
            ordenesRechazadas,
            totalItems
        })

    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async insert(@Res() res, @Body() createData: Prisma.OrdenesServicioRechazadasCreateInput): Promise<any> {

        const ordenRechazada = await this.ordenesServicioRechazadasService.insert(createData);

        return res.status(HttpStatus.CREATED).json({
            success: true,
            message: 'Orden rechazada creada correctamente',
            ordenRechazada
        })

    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(@Res() res, @Param('id') id: number, @Body() dataUpdate: Prisma.OrdenesServicioRechazadasUpdateInput) {

        const ordenRechazada = await this.ordenesServicioRechazadasService.update(id, dataUpdate);

        res.status(HttpStatus.OK).json({
            success: true,
            message: 'Orden rechazada actualizada correctamente',
            ordenRechazada
        })

    }

}
