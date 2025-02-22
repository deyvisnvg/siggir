import { MenuData } from "./Menu";
import { PerfilData } from "./Perfil";

export interface PerfilMenuData {
    perfilMenuId: number;
    perfilMenuEstado: string;
    menuId: number;
    perfilId: number;
    menu?: MenuData;
    perfil?: PerfilData;
}

export interface PerfilMenuBody {
    perfilMenuEstado: string;
    menuId: number;
    perfilId: number;
}