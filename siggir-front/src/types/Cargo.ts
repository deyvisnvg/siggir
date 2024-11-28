import { AreaData } from "./Area";

export interface CargoData {
    cargoId: number;
    cargoNombre: string;
    areaId: number;
    area?: AreaData
}

export interface CargoBody {
    cargoNombre: string;
    areaId: number;
}