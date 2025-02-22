import { GrupoInteresData } from "./GrupoInteres";
import { RiesgoData } from "./Riesgo";

export interface RiesgoGrupoInteresData {
    riesgoGrupoInteresId: number;
    grupoInteresId: number;
    riesgoId: number;
    grupoInteres?: GrupoInteresData;
    riesgo?: RiesgoData;
}

export interface RiesgoGrupoInteresBody {
    grupoInteresId: number;
    riesgoId: number;
}