'use strict'

import { GestionRiesgo, Control, Subperiodo, Riesgo } from "../models";
import { ControlBody } from "../../types/Control";
import { Transaction } from "sequelize";

export const ControlModule = () => {
    async function create(body: ControlBody, options: { transaction: Transaction }) {
        return await Control.create({ ...body }, options);
    }

    async function findAllByIdRiesgo(riesgoId: string) {
        return await Control.findAll({
            attributes: ["control_id", "control_codigo", "control_descripcion"],
            include: [
                {
                    model: Riesgo,
                    where: {
                        riesgoId
                    }
                }
            ]
        });
    }

    async function existsByName(controlCodigo: string) {
        const count = await Control.count({
            where: {
                controlCodigo
            }
        });
        return count > 0;
    }

    async function findById(controlId: string) {
        return await Control.findOne({
            where: {
                controlId
            }
        });
    }

    async function update(controlId: string, body: ControlBody) {
        const condicion = {
            where: {
                controlId
            }
        };

        return await Control.update(body, condicion);
    }

    return {
        create,
        findAllByIdRiesgo,
        existsByName,
        findById,
        update,
    }
}