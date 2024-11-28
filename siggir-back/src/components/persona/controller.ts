import { Request, Response } from "express";
import { PersonaModule } from "../../database/lib";
import { success, failure } from "../../responses";

const { findByDni } = PersonaModule();

export const findByDniPersona = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const dni = params.id;
        const persona = await findByDni(dni);

        if (!persona) {
            success({ res, status: 204, data: persona });
            return;
        }

        success({ res, status: 200, data: persona });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}