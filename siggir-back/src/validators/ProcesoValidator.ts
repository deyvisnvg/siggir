import Joi from 'joi';

export const procesoSchema = Joi.object({
    procesoCodigo: Joi.string().required(),
    procesoNombre: Joi.string().required(),
    macroprocesoId: Joi.number().required(),
});
