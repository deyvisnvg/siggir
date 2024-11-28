import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';
import { failure } from '../responses';

export const validate = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
        return failure({ res, status: 400, message: error.details[0].message })
    }
    next();
};
