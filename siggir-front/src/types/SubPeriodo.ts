import { PeriodoData } from "./Periodo"
import { GestionRiesgoData } from "./GestionRiesgo"
import { CatalogoData } from "./Catalogo"

export interface SubPeriodoData {
    subperiodoId: number;
    /* subperiodoFrecuencia: string; */
    subperiodoDetalle: string;
    subperiodoFecInicio: Date;
    subperiodoFecFin: Date;
    subperiodoEstado: string;
    frecuenciaId: number;
    periodoId: number;
    gestionId: number;
    periodo?: PeriodoData;
    gestion?: GestionRiesgoData;
    frecuencia?: CatalogoData;
}

export interface SubPeriodoBody {
    /* subperiodoFrecuencia: string; */
    subperiodoDetalle: string;
    subperiodoFecInicio: Date;
    subperiodoFecFin: Date;
    subperiodoEstado: string;
    frecuenciaId: number;
    periodoId: number;
    gestionId: number;
}