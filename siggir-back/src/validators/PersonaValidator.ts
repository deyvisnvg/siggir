import Joi from 'joi';

export const personaSchema = Joi.object({
    dni: Joi.string().required(),
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    email: Joi.string().required(),
    fechaNacimiento: Joi.string().required(),
    usuarioId: Joi.string().required(),
});
