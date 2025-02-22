import { Request, Response } from "express";
import { CatalogoModule } from "../../database/lib";
import { success, failure } from "../../responses";
import { ParsedQs } from 'qs';

const { findAllByParams } = CatalogoModule();


export const findByParamsCatalogo = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log("req.query", req.query)
        const { codigo } = req.query;
        
        let params = {
            codigos: JSON.parse((codigo as string)),
        };

        const catalogo = await findAllByParams(params);

        if (!catalogo) {
            failure({ res, status: 404, message: 'Recurso no encontrado' });
            return;
        }

        success({ res, status: 200, data: catalogo });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

