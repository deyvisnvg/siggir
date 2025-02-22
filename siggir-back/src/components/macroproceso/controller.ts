import { Request, Response } from "express";
import { MacroprocesoModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findAll, findById, update } = MacroprocesoModule();

export const addMacroproceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req;
        const macroproceso = await create(body);

        success({ res, status: 201, data: macroproceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllMacroproceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const macroproceso = await findAll();

        success({ res, status: 200, data: macroproceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdMacroproceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const macroprocesoId = Number(id);
        const macroproceso = await findById(macroprocesoId);

        if (!macroproceso) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: macroproceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateMacroproceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const macroprocesoId = Number(params.id);
        const macroproceso = await update(macroprocesoId, body);

        /* if (macroproceso[0] === 0) {
            success({ res, status: 204, data: macroproceso });
            return;
        } */

        success({ res, status: 200, data: macroproceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}