import { Request, Response } from "express";
import { IndicadorKriModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { create, findById, update, findAllByIdRiesgo, existsByName } = IndicadorKriModule();

export const addIndicadorKri = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        /* console.log(data) */

        if (await existsByName(data.indicadorkriCodigo)) {
            failure({ res, status: 409, message: "El código del Indicador KRI ya existe" });
            return;
        }

        const indicadorKri = await create(data);

        success({ res, status: 201, data: indicadorKri });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllIndicadorKriByIdRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id: riesgoId } = req.params;
        const indicadorKris = await findAllByIdRiesgo(riesgoId);

        /* console.log("controls", controls); */

        success({ res, status: 200, data: indicadorKris });
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
}*/

export const findByIdIndicadorKri = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const indicadorKri = await findById(id);

        if (!indicadorKri) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: indicadorKri });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateIndicadorKri = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params, body } = req;
        const indicadorKriId = params.id;
        const indicadorKri = await update(indicadorKriId, body);

        // if (periodo[0] === 0) {
        //    success({ res, status: 204, data: periodo });
        //    return;
        //}

        success({ res, status: 200, data: indicadorKri });
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

