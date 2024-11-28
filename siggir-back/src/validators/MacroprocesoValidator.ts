import Joi from 'joi';

export const macroprocesoSchema = Joi.object({
    macroproCodigo: Joi.string(),
    macroproNombre: Joi.string().required(),
    empleadoId: Joi.string().required(),
});
