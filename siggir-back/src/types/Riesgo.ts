export interface RiesgoData {
    riesgoId: number;
    riesgoCodigo: string;
    riesgoTitulo: string;
    riesgoDescripcion: string;
    riesgoProbabilidad: number;
    riesgoImpacto: number;
    riesgoSeveridad: string;
    nivelId: number;
    origenId: number;
    frecuenciaRiesgoId: number;
    tipoRiesgoId: number;
    subperiodoId: number;
    gerenciaId: number;
    subprocesoId: number;
}

export interface RiesgoBody {
    riesgoCodigo: string;
    riesgoTitulo: string;
    riesgoDescripcion: string;
    nivelId: number;
    origenId: number;
    frecuenciaRiesgoId: number;
    tipoRiesgoId: number;
    subperiodoId: number;
    gerenciaId: number;
    subprocesoId: number;
}