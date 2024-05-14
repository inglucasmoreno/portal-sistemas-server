import { Module } from '@nestjs/common';
import { OrdenesServicioHistorialToTecnicosService } from './ordenes_servicio_historial_to_tecnicos.service';
import { OrdenesServicioHistorialToTecnicosController } from './ordenes_servicio_historial_to_tecnicos.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [OrdenesServicioHistorialToTecnicosService, PrismaService],
  controllers: [OrdenesServicioHistorialToTecnicosController]
})
export class OrdenesServicioHistorialToTecnicosModule {}
