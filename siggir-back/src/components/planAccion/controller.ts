import { Request, Response } from "express";
import { PlanAccionModule } from "../../database/lib";
import { success, failure } from "../../responses";
import { sequelize } from "../../database";
import { SustentoModule } from "../../database/lib/Sustento";

const { create, findAllByIdRiesgo, existsByName } = PlanAccionModule();
const { create: createSustento } = SustentoModule();

export const addPlanAccion = async (req: Request, res: Response): Promise<void> => {
    const transaction = await sequelize.transaction();

    try {
        const files = req.files as Express.Multer.File[];
        const data = req.body;
        console.log("data", data)
        /* console.log("files", files) */

        if (await existsByName(data.planaccionCodigo)) {
            failure({ res, status: 409, message: "El código del Plan Acción ya existe" });
            return;
        }

        const body = {
            ...data,
            estrategiaRespuestaId: Number(data.estrategiaRespuestaId),
            estadoPlanId: Number(data.estadoPlanId),
            cargoId: Number(data.cargoId)
        }

        const planAccion = await create(body, { transaction });

        const bodySustento = files.map(item => ({
            sustentoNombreOriginal: item.originalname,
            sustentoNombre: body.planaccionNombreEvidencia,
            sustentoPath: `${item.filename}`,
            planaccionId: planAccion.planaccionId
        }))

        console.log("bodySustento", bodySustento)

        await createSustento(bodySustento, { transaction });

        await transaction.commit();

        success({ res, status: 201, data: planAccion });
    } catch (error) {
        await transaction.rollback();
        failure({ res, status: 500, message: error });
    }
}

export const findAllPlanAccionByIdRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id: riesgoId } = req.params;
        const planAccion = await findAllByIdRiesgo(riesgoId);

        /* console.log("controls", controls); */

        success({ res, status: 200, data: planAccion });
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

