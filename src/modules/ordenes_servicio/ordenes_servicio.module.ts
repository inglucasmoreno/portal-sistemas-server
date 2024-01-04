import { Module } from '@nestjs/common';
import { OrdenesServicioService } from './ordenes_servicio.service';
import { OrdenesServicioController } from './ordenes_servicio.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [OrdenesServicioService, PrismaService],
  controllers: [OrdenesServicioController]
})
export class OrdenesServicioModule {}
