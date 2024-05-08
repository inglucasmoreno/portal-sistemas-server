import { Module } from '@nestjs/common';
import { OrdenesServicioHistorialController } from './ordenes_servicio_historial.controller';
import { OrdenesServicioHistorialService } from './ordenes_servicio_historial.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OrdenesServicioHistorialController],
  providers: [OrdenesServicioHistorialService, PrismaService]
})
export class OrdenesServicioHistorialModule {}
