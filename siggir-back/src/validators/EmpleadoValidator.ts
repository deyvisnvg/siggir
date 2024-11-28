import Joi from 'joi';

export const empleadoSchema = Joi.object({
    tipoContrato: Joi.string(),
    personaId: Joi.string().required(),
    cargoId: Joi.number().required(),
});
