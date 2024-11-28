import Joi from 'joi';

export const areaSchema = Joi.object({
    areaNombre: Joi.string().required(),
    gerenciaId: Joi.number().required(),
});
