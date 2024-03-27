import { Module } from '@nestjs/common';
import { OrdenesServicioRechazadasController } from './ordenes_servicio_rechazadas.controller';
import { OrdenesServicioRechazadasService } from './ordenes_servicio_rechazadas.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OrdenesServicioRechazadasController],
  providers: [OrdenesServicioRechazadasService, PrismaService]
})
export class OrdenesServicioRechazadasModule {}
