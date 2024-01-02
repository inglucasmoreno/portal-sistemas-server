import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { DependenciasService } from './dependencias.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('dependencias')
export class DependenciasController {

  constructor(private readonly dependenciasService: DependenciasService){}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getId(@Res() res, @Param('id') id: number): Promise<any> {

    const dependencia = await this.dependenciasService.getId(id);
    
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Dependencia obtenida correctamente',
      dependencia     
    })

  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(@Res() res, @Query() query): Promise<any> {
    
    const {dependencias, totalItems} = await this.dependenciasService.getAll(query);

    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Dependencia obtenidas correctamente',
      dependencias,
      totalItems   
    })

  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async insert(@Res() res, @Body() createData: Prisma.DependenciasCreateInput): Promise<any> {

    const dependencia = await this.dependenciasService.insert(createData);

    return res.status(HttpStatus.CREATED).json({
      success: true,
      message: 'Dependencia creada correctamente',
      dependencia
    })
  
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Res() res, @Param('id') id: number, @Body() dataUpdate: Prisma.DependenciasUpdateInput){

    const dependencia = await this.dependenciasService.update(id, dataUpdate);

    res.status(HttpStatus.OK).json({
      success: true,
      message: 'Dependencia actualizada correctamente',
      dependencia
    })

  }

}
