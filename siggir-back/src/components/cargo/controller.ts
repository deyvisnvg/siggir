import { Request, Response } from "express";
import { CargoModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findAll, findById, update } = CargoModule();

export const addCargo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req;
        const cargo = await create(body);

        success({ res, status: 201, data: cargo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllCargo = async (req: Request, res: Response): Promise<void> => {
    try {
        const cargo = await findAll();

        success({ res, status: 200, data: cargo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdCargo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const cargoId = Number(params.id);
        const cargo = await findById(cargoId);

        if (!cargo) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: cargo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateCargo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const cargoId = Number(params.id);
        const cargo = await update(cargoId, body);

        /* if (cargo[0] === 0) {
            success({ res, status: 204, data: cargo });
            return;
        } */

        success({ res, status: 200, data: cargo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}