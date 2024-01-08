import { Module } from '@nestjs/common';
import { UsuariosDependenciasController } from './usuarios_dependencias.controller';
import { UsuariosDependenciasService } from './usuarios_dependencias.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsuariosDependenciasController],
  providers: [UsuariosDependenciasService, PrismaService]
})
export class UsuariosDependenciasModule {}
