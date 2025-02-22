export interface ControlData {
    controlId: string;
    controlCodigo: string;
    controlDescripcion: string;
    controlNombreEvidencia: string;
    controlSustento: string;
    controlProbabilidad: number;
    controlImpacto: number;
    controlSeveridad: string;
    frecuenciaControlId: number;
    oportunidadControlId: number;
    automatizacionControlId: number;
    cargoId: number;
    riesgoId: string;
  }
  
  export interface ControlBody {
    controlCodigo: string;
    controlDescripcion: string;
    controlNombreEvidencia: string;
    controlSustento: string;
    controlProbabilidad: number;
    controlImpacto: number;
    controlSeveridad: string;
    frecuenciaControlId: number;
    oportunidadControlId: number;
    automatizacionControlId: number;
    cargoId: number;
    riesgoId: string;
  }