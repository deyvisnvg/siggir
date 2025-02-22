import { CatalogoData } from "./Catalogo";
import { CargoData } from "./Cargo";
import { RiesgoData } from "./Riesgo";

export interface IndicadorKriData {
  indicadorkriId: number;
  indicadorkriCodigo: string;
  indicadorkriDescripcion: string;
  indicadorkriMeta: string;
  indicadorkriActual: string;
  frecuenciaControlId: number;
  cargoId: number;
  riesgoId: string;
  frecuenciaControl?: CatalogoData;
  cargo?: CargoData;
  riesgo?: RiesgoData;
}

export interface IndicadorKriBody {
  indicadorkriCodigo: string;
  indicadorkriDescripcion: string;
  indicadorkriMeta: string;
  indicadorkriActual: string;
  frecuenciaControlId: number;
  cargoId: number;
  riesgoId: string;
}

/* export interface FormValuesIndicadorKri {
  indicadorkriCodigo?: string;
  indicadorkriDescripcion?: string;
  indicadorkriMeta?: string;
  indicadorkriActual?: string;
  frecuenciaControlKriId?: number | undefined;
  cargoKriId?: number | undefined;
}
 */