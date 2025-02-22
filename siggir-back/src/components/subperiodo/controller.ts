import { Request, Response } from "express";
import { PeriodoModule, SubperiodoModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { findAllByIdGestionRaw, findAllByIdGestion, findAllByParams, create } = SubperiodoModule();

export const addSubPeriodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        console.log(data)
        const periodo = await create(data);

        success({ res, status: 201, data: periodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllByIdGestionSubPeriodoRaw = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const gestionId = Number(id);
        const subperiodo = await findAllByIdGestionRaw(gestionId);

        if (!subperiodo) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: subperiodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllByIdGestionSubPeriodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const gestionId = Number(id);
        const subperiodo = await findAllByIdGestion(gestionId);

        if (!subperiodo) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: subperiodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByParamsSubPeriodo = async (req: Request, res: Response): Promise<void> => {
    try {
        /* console.log("req.query", req.query) */
        const { gestionId, periodoId, frecuenciaId } = req.query;
        const params = {
            gestionId: Number(gestionId), 
            periodoId: Number(periodoId), 
            frecuenciaId: Number(frecuenciaId),
        }
        /* const params = {
            gestionId: Number(gestionId), 
            periodoId: periodoId ? Number(periodoId) : undefined, 
            subperiodoFrecuencia: subperiodoFrecuencia ? String(subperiodoFrecuencia) : undefined,
        } */
        const subperiodo = await findAllByParams(params);

        if (!subperiodo) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: subperiodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

/*
export const findAllPeriodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const periodo = await findAll();

        success({ res, status: 200, data: periodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findByIdPeriodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const periodoId = Number(params.id);
        const periodo = await findById(periodoId);

        if (!periodo) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: periodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updatePeriodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const periodoId = Number(params.id);
        const periodo = await update(periodoId, body);

        // if (periodo[0] === 0) {
        //    success({ res, status: 204, data: periodo });
        //    return;
        //}

        success({ res, status: 200, data: periodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
} */

