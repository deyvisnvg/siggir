import Joi from 'joi';

export const gerenciaSchema = Joi.object({
    gerenciaNombre: Joi.string().required(),
});
