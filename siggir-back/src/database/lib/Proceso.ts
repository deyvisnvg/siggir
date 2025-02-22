'use strict'

import { Proceso, Macroproceso, Subproceso } from "../../database/models";
import { ProcesoBody } from "../../types/Proceso";

export const ProcesoModule = () => {
    async function create(body: ProcesoBody) {
        return await Proceso.create({ ...body });
    }

    async function findAllRaw() {
        return await Proceso.findAll({
            include: [{
                model: Macroproceso
            }],
            raw: true,
        });
    }

    async function findAll() {
        return await Proceso.findAll({
            include: [
                {
                    model: Macroproceso
                },
                {
                    model: Subproceso
                }
            ],
        });
        /* return result.toJSON(); */
    }

    async function findById(procesoId: number) {
        return await Proceso.findOne({
            where: {
                procesoId
            },
            include: [{
                model: Macroproceso
            }],
        });
    }

    async function update(procesoId: number, body: ProcesoBody) {
        const condicion = {
            where: {
                procesoId
            },
        };

        return await Proceso.update(body, condicion);
    }

    return {
        create,
        findAllRaw,
        findAll,
        findById,
        update,
    }
}