import { Request, Response } from "express";
import { GerenciaModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findAll, findById, update } = GerenciaModule();

export const addGerencia = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        const gerencia = await create(data);

        success({ res, status: 201, data: gerencia });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllGerencia = async (req: Request, res: Response): Promise<void> => {
    try {
        const gerencia = await findAll();

        success({ res, status: 200, data: gerencia });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdGerencia = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const gerenciaId = Number(params.id);
        const gerencia = await findById(gerenciaId);

        if (!gerencia) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: gerencia });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateGerencia = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const gerenciaId = Number(params.id);
        const gerencia = await update(gerenciaId, body);

        /* if (gerencia[0] === 0) {
            success({ res, status: 204, data: gerencia });
            return;
        } */

        success({ res, status: 200, data: gerencia });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}