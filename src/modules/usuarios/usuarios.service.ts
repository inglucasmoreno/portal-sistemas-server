import { Injectable, NotFoundException } from '@nestjs/common';
import { CambioPasswordDTO } from './dto';
import * as bcryptjs from 'bcryptjs';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Usuarios } from '@prisma/client';

@Injectable()
export class UsuariosService {

  constructor(private prisma: PrismaService) { }

  // Usuario por ID
  async getUsuario(id: number): Promise<Usuarios> {
    const usuarioDB = await this.prisma.usuarios.findFirst({
      where: { id },
      include: {
        UsuariosDependencias: {
          include: {
            dependencia: true
          }
        }
      },
    });
    if (!usuarioDB) throw new NotFoundException('El usuario no existe');
    return usuarioDB;
  }

  // Usuario por nombre de usuario
  async getUsuarioPorNombre(nombreUsuario: string): Promise<Usuarios | null> {
    return await this.prisma.usuarios.findFirst({
      where: { usuario: nombreUsuario, activo: true },
      include: {
        UsuariosDependencias: {
          include: {
            dependencia: true
          }
        }
      },
    });
  }

  // Usuario por DNI
  async getUsuarioPorDNI(dni: string): Promise<Usuarios | null> {
    return await this.prisma.usuarios.findFirst({
      where: { dni, activo: true },
      include: {
        UsuariosDependencias: {
          include: {
            dependencia: true
          }
        }
      },
    });
  }

  // Usuario por email
  async getUsuarioPorEmail(email: string): Promise<Usuarios | null> {
    email = email.toLocaleLowerCase();
    return await this.prisma.usuarios.findFirst({
      where: { email, activo: true },
      include: {
        UsuariosDependencias: {
          include: {
            dependencia: true
          }
        }
      },
    });
  }

  // Listar usuario
  async listarUsuarios({ columna = 'apellido', direccion = 1, activo = '' }: any): Promise<Usuarios[]> {

    let where = {};
    let orderBy = {};

    orderBy[columna] = direccion == 1 ? 'asc' : 'desc';

    // Filtro por activo
    if (activo !== '') where = { ...where, activo: activo === 'true' ? true : false };

    return await this.prisma.usuarios.findMany({
      include: {
        UsuariosDependencias: {
          include: {
            dependencia: true
          }
        }
      },
      orderBy,
      where
    });

  }

  // Crear usuario
  async crearUsuario(usuariosDTO: any): Promise<Usuarios> {

    const { dependencias, creatorUserId } = usuariosDTO;

    console.log(dependencias);

    // Uppercase y Lowercase
    usuariosDTO.apellido = usuariosDTO.apellido.toLocaleUpperCase();
    usuariosDTO.nombre = usuariosDTO.nombre.toLocaleUpperCase();
    usuariosDTO.email = usuariosDTO.email.toLocaleLowerCase();

    const { usuario, dni, email } = usuariosDTO;

    // Verificacion: Nombre de usuario repetido
    let usuarioDB = await this.prisma.usuarios.findFirst({ where: { usuario } })
    if (usuarioDB) throw new NotFoundException('El nombre de usuario ya se encuentra registrado');

    // Verificacion: Numero de DNI repetido
    usuarioDB = await this.getUsuarioPorDNI(dni);
    if (usuarioDB) throw new NotFoundException('El DNI ya se encuentra registrado');

    // Verificacion: Correo electronico repetido
    usuarioDB = await this.getUsuarioPorEmail(email);
    if (usuarioDB) throw new NotFoundException('El email ya se encuentra registrado');

    // Se adicionan los permisos al usuarios
    // await Promise.all(
    //   permisos.map(async ({ alcance, permiso, creatorUser, updatorUser }) => {
    //     const dataPermiso = {
    //       usuario: nuevoUsuarioDB.id,
    //       alcance,
    //       permiso,
    //       creatorUser,
    //       updatorUser,
    //     };
    //     await this.permisosRepository.save(dataPermiso);
    //   })
    // );

    // Eliminar dependencias y creatorUserId
    delete usuariosDTO.dependencias;
    delete usuariosDTO.creatorUserId;

    const usuarioCreado = await this.prisma.usuarios.create({
      data: usuariosDTO,
      include: {
        UsuariosDependencias: {
          include: {
            dependencia: true
          }
        }
      },
    });
    
    // Agregar cada relacion mediante un for
    for (const dependencia of dependencias) {
      const dataUsuarioDependencia = {
        usuarioId: usuarioCreado.id,
        dependenciaId: dependencia,
        creatorUserId
      }
      await this.prisma.usuariosDependencias.create({ data: dataUsuarioDependencia });
    }

    return usuarioCreado;

  }

  // Actualizar usuario
  async actualizarUsuario(id: any, usuariosUpdateDTO: any): Promise<Usuarios> {

    // Uppercase y Lowercase
    usuariosUpdateDTO.apellido = usuariosUpdateDTO.apellido?.toLocaleUpperCase();
    usuariosUpdateDTO.nombre = usuariosUpdateDTO.nombre?.toLocaleUpperCase();
    usuariosUpdateDTO.email = usuariosUpdateDTO.email?.toLocaleLowerCase();

    const {
      usuario,
      apellido,
      nombre,
      dni,
      email,
      telefono,
      dependencias,
      role,
      password,
      activo,
    } = usuariosUpdateDTO;

    const data = {
      usuario,
      apellido,
      nombre,
      dni,
      email,
      telefono,
      role,
      password,
      activo: activo === 'true' ? true : false,
    }

    // Se agrega la relacion usuarioDependencia
    if (dependencias.length > 0) {

      const dataUsuarioDependencia = {
        usuarioId: id,
        dependenciaId: Number(dependencias[0]),
        creatorUserId: usuariosUpdateDTO.creatorUserId
      }

      // Actualizar - Update la relacion usuarioDependencia donde usuarioId = id
      const usuarioDependenciaDB = await this.prisma.usuariosDependencias.findFirst({ where: { usuarioId: id } });

      if (usuarioDependenciaDB) {
        await this.prisma.usuariosDependencias.update({ where: { id: usuarioDependenciaDB.id }, data: dataUsuarioDependencia });
      } else {
        await this.prisma.usuariosDependencias.create({ data: dataUsuarioDependencia });
      }

    }

    return await this.prisma.usuarios.update({
      where: { id },
      data,
      include: {
        UsuariosDependencias: {
          include: {
            dependencia: true
          }
        }
      },
    });

    // Actualizacion de permisos
    // await Promise.all(
    //   permisos.map(async ({ alcance, permiso, creatorUser, updatorUser }) => {

    //     const permisoDB = await this.permisosRepository.findOne({ where: [{ usuario: { id }, alcance }] });

    //     if (permisoDB) {  // Si existe y es distinto se actualiza

    //       if(permisoDB.permiso !== permiso){

    //         const dataPermiso = {
    //           permiso,
    //           updatorUser
    //         }

    //         await this.permisosRepository.update({ id: permisoDB.id }, dataPermiso);

    //       }

    //     } else { // Si no existe se crea

    //       const dataPermiso = {
    //         usuario: id,
    //         alcance,
    //         permiso,
    //         creatorUser,
    //         updatorUser
    //       };

    //       await this.permisosRepository.save(dataPermiso);

    //     }

    //   })
    // );

  }

  // Actualizar password perfil
  async actualizarPasswordPerfil(id: number, { password_actual, password_nuevo, password_nuevo_repetir }: CambioPasswordDTO): Promise<string> {

    // Datos de usuario
    const usuarioDB = await this.prisma.usuarios.findFirst({ where: { id } });

    // Verificacion - Password actual correcto
    const passwordValido = bcryptjs.compareSync(password_actual, usuarioDB.password);

    if (!usuarioDB || !passwordValido) throw new NotFoundException('La contraseña actual no coincide');

    // Verificacion - Nuevo password
    if (password_nuevo !== password_nuevo_repetir) throw new NotFoundException('Debe repetir correctamente la contraseña');

    // Actualizando contraseña
    const salt = bcryptjs.genSaltSync();
    const password = bcryptjs.hashSync(password_nuevo, salt);

    await this.prisma.usuarios.update({
      where: { id },
      data: { password },
      include: {
        UsuariosDependencias: {
          include: {
            dependencia: true
          }
        }
      },
    });
    return 'Actualizacion correcta';

  }


}
