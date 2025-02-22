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