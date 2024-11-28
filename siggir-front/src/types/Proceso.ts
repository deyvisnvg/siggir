import { MacroprocesoData } from "./Macroproceso";

export interface ProcesoData {
    procesoId: number;
    procesoCodigo: string;
    procesoNombre: string;
    macroprocesoId: number;
    macroproceso?: MacroprocesoData
}

export interface ProcesoBody {
    procesoCodigo: string;
    procesoNombre: string;
    macroprocesoId: number;
}