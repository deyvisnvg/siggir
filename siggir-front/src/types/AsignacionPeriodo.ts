import { PeriodoData } from "./Periodo";

export interface AsignacionPeriodoData {
    asigPeriodoId: number;
    asigPeriodoTrimestre: string;
    asigPeriodoSistema: string;
    periodoId: number;
    periodo?: PeriodoData;
}

export interface AsignacionPeriodoBody {
    asigPeriodoTrimestre: string;
    asigPeriodoSistema: string;
    periodoId: number;
}