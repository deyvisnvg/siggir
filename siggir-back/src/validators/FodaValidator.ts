import Joi from 'joi';

export const fodaSchema = Joi.object({
    fodaCodigo: Joi.string().required(),
    fodaTipo: Joi.string().required(),
    fodaDescripcion: Joi.string().required(),
});
