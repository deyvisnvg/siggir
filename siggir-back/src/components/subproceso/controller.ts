import { Request, Response } from "express";
import { SubprocesoModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findAll, findById, update } = SubprocesoModule();

export const addSubproceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req;
        const subproceso = await create(body);

        success({ res, status: 201, data: subproceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllSubproceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const subproceso = await findAll();

        success({ res, status: 200, data: subproceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdSubproceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const subprocesoId = Number(params.id);
        const subproceso = await findById(subprocesoId);

        if (!subproceso) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: subproceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateSubproceso = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const subprocesoId = Number(params.id);
        const subproceso = await update(subprocesoId, body);

        /* if (subproceso[0] === 0) {
            success({ res, status: 204, data: subproceso });
            return;
        } */

        success({ res, status: 200, data: subproceso });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}