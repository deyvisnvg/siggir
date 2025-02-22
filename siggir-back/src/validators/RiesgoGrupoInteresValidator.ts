import Joi from 'joi';

export const riesgoGrupoInteresSchema = Joi.object({
    grupoInteresId: Joi.number().required(),
    riesgoId: Joi.number().required(),
});