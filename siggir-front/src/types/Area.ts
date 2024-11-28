import { GerenciaData } from "./Gerencia";

export interface AreaData {
    areaId: number;
    areaNombre: string;
    gerenciaId: number;
    gerencia?: GerenciaData
}

export interface AreaBody {
    areaNombre: string;
    gerenciaId: number;
}