import { Module } from '@nestjs/common';
import { OrdenesServicioCompletadasController } from './ordenes_servicio_completadas.controller';
import { OrdenesServicioCompletadasService } from './ordenes_servicio_completadas.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [OrdenesServicioCompletadasController],
  providers: [OrdenesServicioCompletadasService, PrismaService]
})
export class OrdenesServicioCompletadasModule {}
