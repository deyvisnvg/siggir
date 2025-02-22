import Joi from 'joi';

export const procesoImpactadoSchema = Joi.object({
    subprocesoId: Joi.number().required(),
    riesgoId: Joi.number().required(),
});