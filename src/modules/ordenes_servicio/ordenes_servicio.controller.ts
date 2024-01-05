import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { OrdenesServicioService } from './ordenes_servicio.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('ordenes-servicio')
export class OrdenesServicioController {

    constructor(private readonly ordenesServicioService: OrdenesServicioService){}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getId(@Res() res, @Param('id') id: number): Promise<any> {

    const orden = await this.ordenesServicioService.getId(id);
    
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Orden obtenida correctamente',
      orden     
    })

  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(@Res() res, @Query() query): Promise<any> {
    
    const {ordenes, totalItems} = await this.ordenesServicioService.getAll(query);
  
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Ordenes obtenidas correctamente',
      ordenes,
      totalItems   
    })

  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async insert(@Res() res, @Body() createData: Prisma.OrdenesServicioCreateInput): Promise<any> {

    console.log(createData);

    const orden = await this.ordenesServicioService.insert(createData);

    return res.status(HttpStatus.CREATED).json({
      success: true,
      message: 'orden creada correctamente',
      orden
    })
  
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Res() res, @Param('id') id: number, @Body() dataUpdate: Prisma.OrdenesServicioUpdateInput){

    const orden = await this.ordenesServicioService.update(id, dataUpdate);

    res.status(HttpStatus.OK).json({
      success: true,
      message: 'Orden actualizada correctamente',
      orden
    })

  }

}
