export interface SustentoData {
    sustentoId: string;
    sustentoNombreOriginal: string;
    sustentoNombre: string;
    sustentoPath: string;
    controlId: string;
    planaccionId: string;
}

export interface SustentoBody {
    sustentoNombreOriginal: string;
    sustentoNombre: string;
    sustentoPath: string;
    controlId?: string;
    planaccionId?: string;
}