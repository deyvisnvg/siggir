import Joi from 'joi';

export const subprocesoSchema = Joi.object({
    subproCodigo: Joi.string().required(),
    subproNombre: Joi.string().required(),
    procesoId: Joi.number().required(),
    cargoId: Joi.number().required(),
});
