import { Request, Response } from "express";
import { GestionRiesgoModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findAll, findById, update } = GestionRiesgoModule();

export const addGestionRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { body } = req;
        const gestionRiesgo = await create(body);

        success({ res, status: 201, data: gestionRiesgo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllGestionRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const gestionRiesgo = await findAll();

        success({ res, status: 200, data: gestionRiesgo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdGestionRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const gestionId = Number(params.id);
        const gestionRiesgo = await findById(gestionId);

        if (!gestionRiesgo) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: gestionRiesgo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateGestionRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const gestionId = Number(params.id);
        const gestionRiesgo = await update(gestionId, body);

        /* if (gestionRiesgo[0] === 0) {
            success({ res, status: 204, data: gestionRiesgo });
            return;
        } */

        success({ res, status: 200, data: gestionRiesgo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}