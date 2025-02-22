import { CatalogoData } from "./Catalogo";
import { CargoData } from "./Cargo";
import { RiesgoData } from "./Riesgo";

export interface PlanAccionData {
  planaccionId: number;
  planaccionCodigo: string;
  planaccionDescripcion: string;
  planaccionFechaInicio: Date;
  planaccionFechaFin: Date;
  planaccionNombreEvidencia: string;
  planaccionSustento: string;
  estrategiaRespuestaId: number;
  estadoPlanId: number;
  cargoId: number;
  riesgoId: number;
  estadoPlan?: CatalogoData;
  estrategiaRespuesta?: CatalogoData;
  cargo?: CargoData;
  riesgo?: RiesgoData;
}

export interface PlanAccionBody {
  planaccionCodigo: string;
  planaccionDescripcion: string;
  planaccionFechaInicio: Date;
  planaccionFechaFin: Date;
  planaccionNombreEvidencia: string;
  planaccionSustento: string;
  estrategiaRespuestaId: number;
  estadoPlanId: number;
  cargoId: number;
}

/* export interface FormValuesPlanAccion {
  planaccionCodigo?: string;
  planaccionDescripcion?: string;
  planaccionFechaInicio?: Date;
  planaccionFechaFin?: Date;
  planaccionNombreEvidencia?: string;
  planaccionSustento?: string;
  estadoPlanId?: number | undefined;
  estrategiaRespuestaId?: number | undefined;
  cargoPlanId?: number | undefined;
} */