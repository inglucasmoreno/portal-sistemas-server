import { Module } from '@nestjs/common';
import { TiposOrdenServicioController } from './tipos_orden_servicio.controller';
import { TiposOrdenServicioService } from './tipos_orden_servicio.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TiposOrdenServicioController],
  providers: [TiposOrdenServicioService, PrismaService]
})
export class TiposOrdenServicioModule {}
