import { Request, Response } from "express";
import { ProcesoModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findAll, findById, update } = ProcesoModule();

export const addProceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req;
        const proceso = await create(body);

        success({ res, status: 201, data: proceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllProceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const proceso = await findAll();

        success({ res, status: 200, data: proceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdProceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const procesoId = Number(params.id);
        const proceso = await findById(procesoId);

        if (!proceso) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: proceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateProceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const procesoId = Number(params.id);
        const proceso = await update(procesoId, body);

        /* if (proceso[0] === 0) {
            success({ res, status: 204, data: proceso });
            return;
        } */

        success({ res, status: 200, data: proceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}