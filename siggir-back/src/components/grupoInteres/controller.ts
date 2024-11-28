import { Request, Response } from "express";
import { GrupoInteresModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findAll, findById, update } = GrupoInteresModule();

export const addGrupoInteres = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body;
        const grupoInteres = await create(body);

        success({ res, status: 201, data: grupoInteres });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllGrupoInteres = async (req: Request, res: Response): Promise<void> => {
    try {
        const grupoInteres = await findAll();

        success({ res, status: 200, data: grupoInteres });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdGrupoInteres = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const grupoInteresId = Number(params.id);
        const grupoInteres = await findById(grupoInteresId);

        if (!grupoInteres) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: grupoInteres });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateGrupoInteres = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const grupoInteresId = Number(params.id);
        const grupoInteres = await update(grupoInteresId, body);

        /* if (grupoInteres[0] === 0) {
            success({ res, status: 204, data: grupoInteres });
            return;
        } */

        success({ res, status: 200, data: grupoInteres });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}