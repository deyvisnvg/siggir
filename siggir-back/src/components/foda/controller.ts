import { Request, Response } from "express";
import { FodaModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findAll, findById, update } = FodaModule();

export const addFoda = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body;
        const foda = await create(body);

        success({ res, status: 201, data: foda });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllFoda = async (req: Request, res: Response): Promise<void> => {
    try {
        const foda = await findAll();

        success({ res, status: 200, data: foda });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdFoda = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const fodaId = Number(params.id);
        const foda = await findById(fodaId);

        if (!foda) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: foda });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateFoda = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const fodaId = Number(params.id);
        const foda = await update(fodaId, body);

        /* if (foda[0] === 0) {
            success({ res, status: 204, data: foda });
            return;
        } */

        success({ res, status: 200, data: foda });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}