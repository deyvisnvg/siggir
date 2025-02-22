import Joi from 'joi';

export const subPeriodoSchema = Joi.object({
    subperiodoDetalle: Joi.string().required(),
    subperiodoFecInicio: Joi.date().required(),
    subperiodoFecFin: Joi.date().required(),
    subperiodoEstado: Joi.string().required(),
    frecuenciaId: Joi.number().required(),
    periodoId: Joi.number().required(),
    gestionId: Joi.number().required(),
});