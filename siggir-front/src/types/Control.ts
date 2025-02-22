import { CatalogoData } from "./Catalogo";
import { CargoData } from "./Cargo";
import { RiesgoData } from "./Riesgo";

export interface ControlData {
  controlId: number;
  controlCodigo: string;
  controlDescripcion: string;
  controlNombreEvidencia: string;
  controlSustento: string;
  controlProbabilidad: string;
  controlImpacto: string;
  controlSeveridad: string;
  frecuenciaControlId: number;
  oportunidadControlId: number;
  automatizacionControlId: number;
  cargoId: number;
  riesgoId: number;
  frecuenciaControl?: CatalogoData;
  oportunidadControl?: CatalogoData;
  automatizacionControl?: CatalogoData;
  cargo?: CargoData;
  riesgo?: RiesgoData;
}

export interface ControlBody {
  controlCodigo: string;
  controlDescripcion: string;
  controlNombreEvidencia: string;
  controlSustento: string;
  controlProbabilidad: string;
  controlImpacto: string;
  controlSeveridad: string;
  frecuenciaControlId: number;
  oportunidadControlId: number;
  automatizacionControlId: number;
  cargoId: number;
}

/* export interface FormValuesControl {
  controlCodigo?: string;
  controlDescripcion?: string;
  controlNombreEvidencia?: string;
  controlSustento?: string;
  controlProbabilidad?: number;
  controlImpacto?: number;
  controlSeveridad?: string;
  frecuenciaControlId?: number | undefined;
  oportunidadControlId?: number | undefined;
  automatizacionControlId?: number | undefined;
  cargoControlId?: number | undefined;
}
 */