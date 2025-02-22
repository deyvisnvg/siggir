import { MacroprocesoData } from "./Macroproceso";
import { SubprocesoData } from "./Subproceso";

export interface ProcesoData {
    procesoId: number;
    procesoCodigo: string;
    procesoNombre: string;
    macroprocesoId: number;
    macroproceso?: MacroprocesoData;
    subprocesos?: SubprocesoData[];
}

export interface ProcesoBody {
    procesoCodigo: string;
    procesoNombre: string;
    macroprocesoId: number;
}