export interface ProcesoImpactadoData {
    procesoImpactadoId: number;
    subprocesoId: number;
    riesgoId: number;
}

export interface ProcesoImpactadoBody {
    subprocesoId: number;
    riesgoId: number;
}