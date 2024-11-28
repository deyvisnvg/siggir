import Joi from 'joi';

export const grupoInteresSchema = Joi.object({
    grupoInteresNombre: Joi.string().required(),
});
