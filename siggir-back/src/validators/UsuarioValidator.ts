import Joi from 'joi';

export const userPerEmpSchema = Joi.object({
    userId: Joi.string().required(),
    user: Joi.string().required(),
    password: Joi.string().required(),
    estado: Joi.string().required(),
    dni: Joi.string().required(),
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    email: Joi.string().required(),
    fechaNacimiento: Joi.date().required(),
    empleadoId: Joi.string().required(),
    cargoId: Joi.number().required()
});
