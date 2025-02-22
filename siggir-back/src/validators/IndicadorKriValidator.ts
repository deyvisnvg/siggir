import Joi from 'joi';

export const indicadorKriSchema = Joi.object({
    indicadorkriCodigo: Joi.string().required(),
    indicadorkriDescripcion: Joi.string().required(),
    indicadorkriMeta: Joi.string().required(),
    indicadorkriActual: Joi.string().required(),
    frecuenciaControlId: Joi.number().required(),
    cargoId: Joi.number().required(),
    riesgoId: Joi.string().required(),
});