import { SubprocesoData } from "./Subproceso";
import { RiesgoData } from "./Riesgo";

export interface ProcesoImpactadoData {
    procesoImpactadoId: number;
    subprocesoId: number;
    riesgoId: number;
    subproceso?: SubprocesoData;
    riesgo?: RiesgoData;
}

export interface ProcesoImpactadoBody {
    subprocesoId: number;
    riesgoId: number;
}