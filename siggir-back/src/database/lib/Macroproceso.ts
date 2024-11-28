'use strict'

import { Macroproceso } from "../../database/models";
import { MacroprocesoBody } from "../../types/Macroproceso";

export const MacroprocesoModule = () => {
    async function create(body: MacroprocesoBody) {
        return await Macroproceso.create({ ...body });
    }

    async function findAll() {
        return await Macroproceso.findAll();
    }

    async function findById(macroprocesoId: number) {
        return await Macroproceso.findOne({
            where: {
                macroprocesoId
            }
        });
    }

    async function update(macroprocesoId: number, body: MacroprocesoBody) {
        const condicion = {
            where: {
                macroprocesoId
            },
        };

        return await Macroproceso.update(body, condicion);
    }

    return {
        create,
        findAll,
        findById,
        update,
    }
}