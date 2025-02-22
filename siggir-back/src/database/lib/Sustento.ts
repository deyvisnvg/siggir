'use strict'

import { Sustento } from "../models";
import { SustentoBody } from "../../types/Sustento";
import { Transaction } from "sequelize";

export const SustentoModule = () => {
    async function create(bodySustento: any, options: { transaction: Transaction }) {
        console.log("bodySustentooo", bodySustento)
        return await Sustento.bulkCreate(bodySustento, { ...options, individualHooks: true });
    }

    /* async function findAllRaw() {
        return await Sustento.findAll({
            include: [{
                model: Macroproceso
            }],
            raw: true,
        });
    } */

    /* async function findAll() {
        return await Sustento.findAll({
            include: [
                {
                    model: Macroproceso
                },
                {
                    model: Subproceso
                }
            ],
        });
        // return result.toJSON();
    }

    async function findById(procesoId: number) {
        return await Sustento.findOne({
            where: {
                procesoId
            },
            include: [{
                model: Macroproceso
            }],
        });
    }

    async function update(procesoId: number, body: SustentoBody) {
        const condicion = {
            where: {
                procesoId
            },
        };

        return await Sustento.update(body, condicion);
    } */

    return {
        create,
        /* findAllRaw,
        findAll,
        findById,
        update, */
    }
}