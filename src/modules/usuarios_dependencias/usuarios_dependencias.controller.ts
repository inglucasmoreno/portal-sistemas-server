import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Query, Res, UseGuards } from '@nestjs/common';
import { UsuariosDependenciasService } from './usuarios_dependencias.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Prisma } from '@prisma/client';

@Controller('usuarios-dependencias')
export class UsuariosDependenciasController {

  constructor(private readonly usuariosDependenciasService: UsuariosDependenciasService){}

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getId(@Res() res, @Param('id') id: number): Promise<any> {

    const relacion = await this.usuariosDependenciasService.getId(id);
    
    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Relacion obtenida correctamente',
      relacion    
    })

  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(@Res() res, @Query() query): Promise<any> {
    
    const {relaciones, totalItems} = await this.usuariosDependenciasService.getAll(query);

    return res.status(HttpStatus.OK).json({
      success: true,
      message: 'Relaciones obtenidas correctamente',
      relaciones,
      totalItems   
    })

  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async insert(@Res() res, @Body() createData: Prisma.UsuariosDependenciasCreateInput): Promise<any> {

    const relacion = await this.usuariosDependenciasService.insert(createData);

    return res.status(HttpStatus.CREATED).json({
      success: true,
      message: 'Relacion creada correctamente',
      relacion
    })
  
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Res() res, @Param('id') id: number, @Body() dataUpdate: Prisma.DependenciasUpdateInput){

    const relacion = await this.usuariosDependenciasService.update(id, dataUpdate);

    res.status(HttpStatus.OK).json({
      success: true,
      message: 'Relacion actualizada correctamente',
      relacion
    })

  }

}
