'use strict'

import { GestionRiesgo } from "../../database/models";
import { GestionRiesgoBody } from "../../types/GestionRiesgo";

export const GestionRiesgoModule = () => {
    async function create(body: GestionRiesgoBody) {
        return await GestionRiesgo.create({ ...body });
    }

    async function findAll() {
        return await GestionRiesgo.findAll();
    }

    async function findById(gestionId: number) {
        return await GestionRiesgo.findOne({
            where: {
                gestionId
            }
        });
    }

    async function update(gestionId: number, body: GestionRiesgoBody) {
        const condicion = {
            where: {
                gestionId
            },
        };

        return await GestionRiesgo.update(body, condicion);
    }

    return {
        create,
        findAll,
        findById,
        update,
    }
}