import { Module } from '@nestjs/common';
import { OrdenesServicioToTecnicosService } from './ordenes_servicio_to_tecnicos.service';
import { OrdenesServicioToTecnicosController } from './ordenes_servicio_to_tecnicos.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [OrdenesServicioToTecnicosService, PrismaService],
  controllers: [OrdenesServicioToTecnicosController]
})
export class OrdenesServicioToTecnicosModule {}
