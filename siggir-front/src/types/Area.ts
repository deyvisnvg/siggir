import { CargoData } from "./Cargo";
import { GerenciaData } from "./Gerencia";

export interface AreaData {
    areaId: number;
    areaNombre: string;
    gerenciaId: number;
    gerencia?: GerenciaData;
    cargos?: CargoData[];
}

export interface AreaBody {
    areaNombre: string;
    gerenciaId: number;
}