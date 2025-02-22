import Joi from 'joi';

export const planAccionSchema = Joi.object({
    planaccionCodigo: Joi.string().required(),
    planaccionDescripcion: Joi.string().required(),
    planaccionFechaInicio: Joi.date().required(),
    planaccionFechaFin: Joi.date().required(),
    planaccionNombreEvidencia: Joi.string().required(),
    planaccionSustento: Joi.string().required(),
    estrategiaRespuestaId: Joi.number().required(),
    estadoPlanId: Joi.number().required(),
    cargoId: Joi.number().required(),
});