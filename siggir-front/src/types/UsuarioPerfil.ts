import { PerfilData } from "./Perfil";
import { UsuarioData } from "./Usuario";

export interface UsuarioPerfilData {
    userPerfilId: number;
    userPerfilEstado: string;
    userId: number;
    perfilId: number;
    user?: UsuarioData;
    perfil?: PerfilData;
}

export interface UsuarioPerfilBody {
    userPerfilEstado: string;
    userId: number;
    perfilId: number;
}