import { Request, Response } from "express";
import { AreaModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findAll, findById, update } = AreaModule();

export const addArea = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req;
        const area = await create(body);

        success({ res, status: 201, data: area });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllArea = async (req: Request, res: Response): Promise<void> => {
    try {
        const area = await findAll();

        success({ res, status: 200, data: area });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdArea = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const areaId = Number(params.id);
        const area = await findById(areaId);

        if (!area) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: area });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateArea = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const areaId = Number(params.id);
        const area = await update(areaId, body);

        /* if (area[0] === 0) {
            success({ res, status: 204, data: area });
            return;
        } */

        success({ res, status: 200, data: area });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}