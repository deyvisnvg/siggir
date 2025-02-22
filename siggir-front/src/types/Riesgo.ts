import { CatalogoData } from "./Catalogo";
import { GerenciaData } from "./Gerencia";
import { SubPeriodoData } from "./SubPeriodo";
import { SubprocesoData } from "./Subproceso";

export interface RiesgoData {
  riesgoId: number;
  riesgoCodigo: string;
  riesgoTitulo: string;
  riesgoDescripcion: string;
  riesgoProbabilidad: string;
  riesgoImpacto: string;
  riesgoSeveridad: string;
  nivelId: number;
  origenId: number;
  frecuenciaRiesgoId: number;
  tipoRiesgoId: number;
  subperiodoId: number;
  gerenciaId: number;
  subprocesoId: number;
  nivel?: CatalogoData;
  origen?: CatalogoData;
  frecuenciaRiesgo?: CatalogoData;
  tipoRiesgo?: CatalogoData;
  subperiodo?: SubPeriodoData;
  gerencia?: GerenciaData;
  subproceso?: SubprocesoData;
}

export interface RiesgoBody {
  riesgoCodigo: string;
  riesgoTitulo?: string;
  riesgoDescripcion: string;
  riesgoProbabilidad: string;
  riesgoImpacto: string;
  riesgoSeveridad: string;
  nivelId: number;
  origenId: number;
  frecuenciaRiesgoId: number;
  tipoRiesgoId: number;
  subperiodoId: number;
  gerenciaId: number;
  subprocesoId?: number;
  listProcesosImpactados?: string;
  listFoda?: string;
  listGrupoInteres?: string;
}

/* export interface FormValues {
  subperiodoId: number | undefined;
  riesgoCodigo: string;
  nivelId: number | undefined;
  origenId: number | undefined;
  frecuenciaRiesgoId: number | undefined;
  tipoRiesgoId: number | undefined;
  gerenciaId: number | undefined;
  subprocesoId?: number | undefined;
  riesgoDescripcion: string;
  riesgoProbabilidad: number | undefined;
  riesgoImpacto: number | undefined;
  riesgoSeveridad: string;
  riesgoTitulo?: string;
  listProcesosImpactados?: string;
  listFoda?: string;
  listGrupoInteres?: string;
} */

/* export interface SelectRiesgo {
  name: string;
  abreviatura: string;
  color: string;
} */