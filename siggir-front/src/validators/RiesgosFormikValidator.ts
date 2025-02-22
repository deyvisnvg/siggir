import * as Yup from 'yup';

export const RiesgosFormikValidator = (nivel: string) => {
    const riesgosValidationSchema = Yup.object({
        subperiodoId: Yup.number()
            .required('El subperiodo es obligatorio.'),
        riesgoCodigo: Yup.string()
            .min(2, 'Ingrese al menos 2 caracteres.')
            .required('El código de riesgo es obligatorio.'),
        nivelId: Yup.number()
            .required('El nivel es obligatorio.'),
        origenId: Yup.number()
            .required('El origen es obligatorio.'),
        frecuenciaRiesgoId: Yup.number()
            .required('La frecuencia es obligatorio.'),
        tipoRiesgoId: Yup.number()
            .required('El tipo de riesgo es obligatorio.'),
        gerenciaId: Yup.number()
            .required('La gerencia es obligatorio.'),
        subprocesoId: Yup.number()
            .when([], () => {
                return nivel === 'proceso' ? Yup.number().required('El proceso es obligatorio.') : Yup.number();
            }),
        riesgoDescripcion: Yup.string()
            .min(5, 'Ingrese al menos 5 caracteres.')
            .required('La descripción es obligatorio.'),
        riesgoTitulo: Yup.string()
            .min(5, 'Ingrese al menos 5 caracteres.')
            .when([], () => {
                return nivel === 'entidad' ? Yup.string().required('El título es obligatorio.') : Yup.string();
            }),
        riesgoProbabilidad: Yup.number()
            .required('La probabilidad es obligatorio.'),
        riesgoImpacto: Yup.number()
            .required('El impacto es obligatorio.'),
        riesgoSeveridad: Yup.string()
            .required('El Cálculo es obligatorio.'),
        listProcesosImpactados: Yup.array()
            .when([], () => {
                return nivel === 'entidad' ? Yup.string().required('Procesos impactados es obligatorio.') : Yup.string();
            }),
        listFoda: Yup.array()
            .when([], () => {
                return nivel === 'entidad' ? Yup.string().required('Foda es obligatorio.') : Yup.string();
            }),
        listGrupoInteres: Yup.array()
            .when([], () => {
                return nivel === 'entidad' ? Yup.string().required('Grupo de interes es obligatorio.') : Yup.string();
            }),
    });

    const controlValidationSchema = Yup.object({
        controlCodigo: Yup.string()
            .min(2, 'Ingrese al menos 2 caracteres.')
            .required('El código del control es obligatorio.'),
        controlDescripcion: Yup.string()
            .min(2, 'Ingrese al menos 10 caracteres.')
            .required('La descripción es obligatorio.'),
        controlNombreEvidencia: Yup.string()
            .min(2, 'Ingrese al menos 2 caracteres.')
            .required('El nombre de evidencia es obligatorio.'),
        controlSustento: Yup.mixed()
            .test('fileSize', 'El archivo es muy grande', (value: any) => {
                if (!value) {
                    return true;
                }

                let valid = true;
                for (let i = 0; i < value.length; i++) {
                    if (value[i].size > 1024 * 1024) { // 1MB
                        valid = false;
                    }
                }
                return valid;
            }),
        controlProbabilidad: Yup.number()
            .required('La probabilidad es obligatorio.'),
        controlImpacto: Yup.number()
            .required('El impacto es obligatorio.'),
        controlSeveridad: Yup.string()
            .required('El Cálculo es obligatorio.'),
        frecuenciaControlId: Yup.number()
            .required('La frecuencia es obligatorio.'),
        oportunidadControlId: Yup.number()
            .required('Este campo es obligatorio.'),
        automatizacionControlId: Yup.number()
            .required('Este campo es obligatorio.'),
        cargoControlId: Yup.number()
            .required('El cargo es obligatorio.'),
    });


    const planAccionValidationSchema = Yup.object({
        planaccionCodigo: Yup.string()
            .min(2, 'Ingrese al menos 2 caracteres.')
            .required('El código del control es obligatorio.'),
        planaccionDescripcion: Yup.string()
            .min(2, 'Ingrese al menos 10 caracteres.')
            .required('La descripción es obligatorio.'),
        planaccionFechaInicio: Yup.date()
            .required('La fecha inicio es obligatorio.'),
        planaccionFechaFin: Yup.date()
            .required('La fecha fin es obligatorio.')
            .min(
                Yup.ref('planaccionFechaInicio'), 'Fecha fin no puede ser menor que Fecha inicio.'
            ),
        planaccionNombreEvidencia: Yup.string()
            .min(2, 'Ingrese al menos 2 caracteres.')
            .required('El nombre de evidencia es obligatorio.'),
        planaccionSustento: Yup.mixed()
            .test('fileSize', 'El archivo es muy grande', (value: any) => {
                if (!value) {
                    return true;
                }

                let valid = true;
                for (let i = 0; i < value.length; i++) {
                    if (value[i].size > 1024 * 1024) { // 1MB
                        valid = false;
                    }
                }
                return valid;
            }),
        estadoPlanId: Yup.number()
            .required('Este campo es obligatorio.'),
        estrategiaRespuestaId: Yup.number()
            .required('La estrategia es obligatorio.'),
        cargoPlanId: Yup.number()
            .required('El cargo es obligatorio.'),
    });


    const IndicadorKriValidationSchema = Yup.object({
        indicadorkriCodigo: Yup.string()
            .min(2, 'Ingrese al menos 2 caracteres.')
            .required('El código del control es obligatorio.'),
        indicadorkriDescripcion: Yup.string()
            .min(2, 'Ingrese al menos 10 caracteres.')
            .required('La descripción es obligatorio.'),
        indicadorkriMeta: Yup.string()
            .min(2, 'Ingrese al menos 2 caracteres.')
            .required('El nombre de evidencia es obligatorio.'),
        indicadorkriActual: Yup.string()
            .required('Este campo es obligatorio.'),
        frecuenciaControlKriId: Yup.number()
            .required('La estrategia es obligatorio.'),
        cargoKriId: Yup.number()
            .required('El cargo es obligatorio.'),
    });

    return {
        riesgosValidationSchema,
        controlValidationSchema,
        planAccionValidationSchema,
        IndicadorKriValidationSchema,
    }
}

export const initialValuesFormik = {
    subperiodoId: undefined,
    riesgoCodigo: '',
    nivelId: undefined,
    origenId: undefined,
    frecuenciaRiesgoId: undefined,
    tipoRiesgoId: undefined,
    gerenciaId: undefined,
    subprocesoId: undefined,
    riesgoDescripcion: '',
    riesgoProbabilidad: undefined,
    riesgoImpacto: undefined,
    riesgoSeveridad: '',
    riesgoTitulo: '',
    listProcesosImpactados: '',
    listFoda: '',
    listGrupoInteres: '',

    controlCodigo: '',
    controlDescripcion: '',
    controlNombreEvidencia: '',
    controlSustento: '',
    controlProbabilidad: undefined,
    controlImpacto: undefined,
    controlSeveridad: '',
    frecuenciaControlId: undefined,
    oportunidadControlId: undefined,
    automatizacionControlId: undefined,
    cargoControlId: undefined,

    planaccionCodigo: '',
    planaccionDescripcion: '',
    planaccionFechaInicio: undefined,
    planaccionFechaFin: undefined,
    planaccionNombreEvidencia: '',
    planaccionSustento: '',
    estadoPlanId: undefined,
    estrategiaRespuestaId: undefined,
    cargoPlanId: undefined,

    indicadorkriCodigo: '',
    indicadorkriDescripcion: '',
    indicadorkriMeta: '',
    indicadorkriActual: '',
    frecuenciaControlKriId: undefined,
    cargoKriId: undefined,
}