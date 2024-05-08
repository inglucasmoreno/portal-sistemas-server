import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class InicializacionService {

  constructor(private prisma: PrismaService){}

  async inicializacion(): Promise<any> {

    // 1) - Verificacion
    const verificacion = await this.prisma.usuarios.findMany();
    if (verificacion.length != 0) throw new NotFoundException('El sistema ya fue inicializado');

    // 2) - Se crea usuario administrador
    const data: any = {
      usuario: 'admin',
      apellido: 'ADMIN',
      nombre: 'ADMIN',
      dni: '34060390',
      email: 'admin@gmail.com',
      role: 'ADMIN_ROLE',
      telefono: '2664869642',
      activo: true
    }

    // Generacion de password encriptado
    const salt = bcryptjs.genSaltSync();
    data.password = bcryptjs.hashSync('admin', salt);

    // Se crea el usuario ADMIN en base
    const usuarioDB = await this.prisma.usuarios.create({ data });

    // Se crea la dependencia SISTEMAS en base
    const dependenciaDB = await this.prisma.dependencias.create({ 
      data: { 
        nombre: 'SISTEMAS', 
        creatorUserId: usuarioDB.id  
      } });

    // Se crea la relacion entre el usuario y la dependencia
    await this.prisma.usuariosDependencias.create({ 
      data: { 
        usuarioId: usuarioDB.id, 
        dependenciaId: dependenciaDB.id,
        creatorUserId: usuarioDB.id
      } });

    return usuarioDB;

  }

}
