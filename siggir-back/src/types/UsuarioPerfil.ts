export interface UsuarioPerfilData {
    userPerfilId: number;
    userPerfilEstado: string;
    userId: number;
    perfilId: number;
}

export interface UsuarioPerfilBody {
    userPerfilEstado: string;
    userId: number;
    perfilId: number;
}