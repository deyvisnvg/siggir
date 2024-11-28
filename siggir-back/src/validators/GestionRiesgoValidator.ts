import Joi from 'joi';

export const gestionRiesgoSchema = Joi.object({
    gestionNombre: Joi.string(),
    gestionAbreviatura: Joi.string().required(),
    gestionColor: Joi.string().required(),
    empleadoId: Joi.string().required(),
});
