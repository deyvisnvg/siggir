import Joi from 'joi';

export const riesgoProcesoSchema = Joi.object({
    riesgoCodigo: Joi.string().required(),
    riesgoDescripcion: Joi.string().required(),
    riesgoProbabilidad: Joi.string().required(),
    riesgoImpacto: Joi.string().required(),
    riesgoSeveridad: Joi.string().required(),
    nivelId: Joi.number().required(),
    origenId: Joi.number().required(),
    frecuenciaRiesgoId: Joi.number().required(),
    tipoRiesgoId: Joi.number().required(),
    subperiodoId: Joi.number().required(),
    gerenciaId: Joi.number().required(),
    subprocesoId: Joi.number().required(),
});

export const riesgoEntidadSchema = Joi.object({
    riesgoId: Joi.string().required(),
    riesgoCodigo: Joi.string().required(),
    riesgoTitulo: Joi.string(),
    riesgoDescripcion: Joi.string().required(),
    riesgoProbabilidad: Joi.string().required(),
    riesgoImpacto: Joi.string().required(),
    riesgoSeveridad: Joi.string().required(),
    nivelId: Joi.number().required(),
    origenId: Joi.number().required(),
    frecuenciaRiesgoId: Joi.number().required(),
    tipoRiesgoId: Joi.number().required(),
    subperiodoId: Joi.number().required(),
    gerenciaId: Joi.number().required(),
    listProcesosImpactados: Joi.string().required(),
    listFoda: Joi.string().required(),
    listGrupoInteres: Joi.string().required(),
});