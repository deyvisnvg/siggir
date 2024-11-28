'use strict'

import { Subproceso, Proceso, Cargo, Macroproceso } from "../../database/models";
import { SubprocesoBody } from "../../types/Subproceso";

export const SubprocesoModule = () => {
    async function create(body: SubprocesoBody) {
        return await Subproceso.create({ ...body });
    }

    async function findAll() {
        return await Subproceso.findAll({
            include: [
                {
                    model: Proceso,
                    include: [{
                        model: Macroproceso
                    }]
                },
                {
                    model: Cargo
                }
            ],
            raw: true,
        });
    }

    async function findById(subprocesoId: number) {
        return await Subproceso.findOne({
            where: {
                subprocesoId
            },
            include: [
                {
                    model: Proceso,
                    include: [{
                        model: Macroproceso
                    }]
                },
                {
                    model: Cargo
                }
            ],
        });
    }

    async function update(subprocesoId: number, body: SubprocesoBody) {
        const condicion = {
            where: {
                subprocesoId
            },
        };

        return await Subproceso.update(body, condicion);
    }

    return {
        create,
        findAll,
        findById,
        update,
    }
}