import Joi from 'joi';

export const controlSchema = Joi.object({
    controlCodigo: Joi.string().required(),
    controlDescripcion: Joi.string().required(),
    controlNombreEvidencia: Joi.string().required(),
    controlSustento: Joi.string().required(),
    controlProbabilidad: Joi.string().required(),
    controlImpacto: Joi.string().required(),
    controlSeveridad: Joi.string().required(),
    frecuenciaControlId: Joi.number().required(),
    oportunidadControlId: Joi.number().required(),
    automatizacionControlId: Joi.number().required(),
    cargoId: Joi.number().required(),
});