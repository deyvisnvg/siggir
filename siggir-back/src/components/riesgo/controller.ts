import { Request, Response } from "express";
import { RiesgoModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findById, update, findAllByIdGestion, existsByName } = RiesgoModule();

export const addRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        /* console.log(data) */

        if (await existsByName(data.riesgoCodigo)) {
            failure({ res, status: 409, message: "El código del riesgo ya existe" });
            return;
        }

        const riesgo = await create(data);

        success({ res, status: 201, data: riesgo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllRiesgoByIdGestion = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const gestionId = Number(id);
        const riesgos = await findAllByIdGestion(gestionId);

        /* console.log("riesgos", riesgos); */

        success({ res, status: 200, data: riesgos });
    } catch (error) {
        console.log(error)
        failure({ res, status: 500, message: error });
    }
}

export const findByIdRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const riesgo = await findById(id);

        if (!riesgo) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: riesgo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const riesgoId = params.id;
        const riesgo = await update(riesgoId, body);

        // if (periodo[0] === 0) {
        //    success({ res, status: 204, data: periodo });
        //    return;
        //}

        success({ res, status: 200, data: riesgo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}
/* 
export const findByParamsSubPeriodo = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("req.query", req.query)
        const { gestionId, periodoId, frecuenciaId } = req.query;
        const params = {
            gestionId: Number(gestionId), 
            periodoId: Number(periodoId), 
            frecuenciaId: Number(frecuenciaId),
        }

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
 */
/*
export const findAllPeriodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const periodo = await findAll();

        success({ res, status: 200, data: periodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}*/


