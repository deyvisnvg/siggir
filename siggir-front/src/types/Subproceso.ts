import { CargoData } from "./Cargo";
import { ProcesoData } from "./Proceso";

export interface SubprocesoData {
    subprocesoId: number;
    subproCodigo: string;
    subproNombre: string;
    procesoId: number;
    cargoId: number;
    proceso?: ProcesoData
    cargo?: CargoData
}

export interface SubprocesoBody {
    subproCodigo: string;
    subproNombre: string;
    procesoId: number;
    cargoId: number;
}