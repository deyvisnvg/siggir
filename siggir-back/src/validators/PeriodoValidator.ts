import Joi from 'joi';

export const periodoSchema = Joi.object({
    periodoAnio: Joi.string().required(),
    periodoEstado: Joi.string().required(),
});
