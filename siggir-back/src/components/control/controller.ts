import { Request, Response } from "express";
import { ControlModule } from "../../database/lib";
import { success, failure } from "../../responses";
import { sequelize } from "../../database";
import { SustentoModule } from "../../database/lib/Sustento";

const { create, findById, findAllByIdRiesgo, existsByName } = ControlModule();
const { create: createSustento } = SustentoModule();

export const addControl = async (req: Request, res: Response): Promise<void> => {
    const transaction = await sequelize.transaction();

    try {
        const files = req.files as Express.Multer.File[]; // Acceder a los archivos
        const data = req.body;

        if (await existsByName(data.controlCodigo)) {
            failure({ res, status: 409, message: "El código del control ya existe" });
            return;
        }

        /* console.log('Archivos:', files);
        console.log('Datos:', data); */

        const body = {
            ...data,
            controlProbabilidad: data.controlProbabilidad,
            controlImpacto: data.controlImpacto,
            frecuenciaControlId: Number(data.frecuenciaControlId),
            oportunidadControlId: Number(data.oportunidadControlId),
            automatizacionControlId: Number(data.automatizacionControlId),
            cargoId: Number(data.cargoId)
        }

        const control = await create(body, { transaction });

        const bodySustento = files.map(item => ({
            sustentoNombreOriginal: item.originalname,
            sustentoNombre: body.controlNombreEvidencia,
            sustentoPath: `${item.filename}`,
            controlId: control.controlId
        }))


        await createSustento(bodySustento, { transaction });
        /* console.log('body:', body);
        console.log('bodySustento:', bodySustento); */
        /* dataPersona.foto = env.FILES_ROUTE + '/' + file.originalname; */
        await transaction.commit();

        success({ res, status: 201, data: control });
    } catch (error) {
        await transaction.rollback();
        failure({ res, status: 500, message: error });
    }
}

export const findByIdControl = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const control = await findById(id);

        if (!control) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: control });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateControl = async (req: Request, res: Response): Promise<void> => {
    const transaction = await sequelize.transaction();

    try {
        const files = req.files as Express.Multer.File[]; // Acceder a los archivos
        const data = req.body;

        console.log('Archivos:', files);
        console.log('Datos:', data);

        /* const body = {
            ...data,
            controlProbabilidad: data.controlProbabilidad,
            controlImpacto: data.controlImpacto,
            frecuenciaControlId: Number(data.frecuenciaControlId),
            oportunidadControlId: Number(data.oportunidadControlId),
            automatizacionControlId: Number(data.automatizacionControlId),
            cargoId: Number(data.cargoId)
        }

        const control = await create(body, { transaction });

        const bodySustento = files.map(item => ({
            sustentoNombreOriginal: item.originalname,
            sustentoNombre: body.controlNombreEvidencia,
            sustentoPath: `${item.filename}`,
            controlId: control.controlId
        }))

        await createSustento(bodySustento, { transaction });

        await transaction.commit();

        success({ res, status: 200, data: control }); */
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const findAllControlByIdRiesgo = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id: riesgoId } = req.params;
        const controles = await findAllByIdRiesgo(riesgoId);

        /* console.log("controls", controles); */

        success({ res, status: 200, data: controles });
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
 */

