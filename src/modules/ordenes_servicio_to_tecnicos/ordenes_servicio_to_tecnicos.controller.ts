import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { OrdenesServicioToTecnicosService } from './ordenes_servicio_to_tecnicos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('ordenes-servicio-to-tecnicos')
export class OrdenesServicioToTecnicosController {

    constructor(private readonly ordenesServicioToTecnicosService: OrdenesServicioToTecnicosService) { }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async getId(@Res() res, @Param('id') id: number): Promise<any> {

        const ordenToTecnico = await this.ordenesServicioToTecnicosService.getId(id);

        return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Orden to tecnico obtenida correctamente',
            ordenToTecnico
        })

    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getAll(@Res() res, @Query() query): Promise<any> {

        const { ordenesToTecnicos, totalItems } = await this.ordenesServicioToTecnicosService.getAll(query);

        return res.status(HttpStatus.OK).json({
            success: true,
            message: 'Ordenes to tecnicos obtenidas correctamente',
            ordenesToTecnicos,
            totalItems
        })

    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async insert(@Res() res, @Body() createData: Prisma.OrdenesServicioToTecnicosCreateInput): Promise<any> {

        const ordenToTecnico = await this.ordenesServicioToTecnicosService.insert(createData);

        return res.status(HttpStatus.CREATED).json({
            success: true,
            message: 'Orden to tecnico creada correctamente',
            ordenToTecnico
        })

    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async update(@Res() res, @Param('id') id: number, @Body() dataUpdate: Prisma.OrdenesServicioToTecnicosUpdateInput) {

        const ordenToTecnico = await this.ordenesServicioToTecnicosService.update(id, dataUpdate);

        res.status(HttpStatus.OK).json({
            success: true,
            message: 'Orden to tecnico actualizada correctamente',
            ordenToTecnico
        })

    }

}
