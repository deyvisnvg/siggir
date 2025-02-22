import { Request, Response } from "express";
import { PeriodoModule } from "../../database/lib";
import { success, failure } from "../../responses";
import path from "path";
import fs from 'fs';

const { create, findAll, findById, existsByName, update, } = PeriodoModule();

export const addPeriodo = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;
        console.log("data", data)

        if (await existsByName(data.periodoAnio)) {
            failure({ res, status: 409, message: "El periodo ya existe" });
            return;
        }

        const folderName = data.periodoAnio;
        const rootDir = process.cwd();
        const folderPath = path.join(rootDir, 'src', 'public', folderName);
        console.log("__dirname", folderPath)

        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`Carpeta "${folderName}" creada exitosamente`);
        }

        const periodo = await create(data);

        success({ res, status: 201, data: periodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

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

        /* if (periodo[0] === 0) {
            success({ res, status: 204, data: periodo });
            return;
        } */

        success({ res, status: 200, data: periodo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}