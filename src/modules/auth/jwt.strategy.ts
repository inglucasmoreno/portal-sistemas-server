import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpliration: false,
            secretOrKey: jwtConstants.secret
        });
    }

    async validate(payload: any){
        return { 
            userId: payload.userId, 
            usuario: payload.usuario,
            dni: payload.dni,
            email: payload.email,
            apellido: payload.apellido,
            nombre: payload.nombre,
            telefono: payload.telefono,
            permisos: payload.permisos,
            role: payload.role,
            dependencias: payload.dependencias
        }
    }

}