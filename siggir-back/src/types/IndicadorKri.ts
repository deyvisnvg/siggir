export interface IndicadorKriData {
  indicadorkriId: number;
  indicadorkriCodigo: string;
  indicadorkriDescripcion: string;
  indicadorkriMeta: string;
  indicadorkriActual: string;
  frecuenciaControlId: number;
  cargoId: number;
  riesgoId: number;
}

export interface IndicadorKriBody {
  indicadorkriCodigo: string;
  indicadorkriDescripcion: string;
  indicadorkriMeta: string;
  indicadorkriActual: string;
  frecuenciaControlId: number;
  cargoId: number;
}