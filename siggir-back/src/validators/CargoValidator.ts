import Joi from 'joi';

export const cargoSchema = Joi.object({
    cargoNombre: Joi.string().required(),
    areaId: Joi.number().required(),
});
