'use strict'

import { Gerencia } from "../../database/models";
import { GerenciaBody } from "../../types/Gerencia";

export const GerenciaModule = () => {
    async function create(body: GerenciaBody) {
        return await Gerencia.create({ ...body });
    }

    async function findAll() {
        return await Gerencia.findAll();
    }

    async function findById(gerenciaId: number) {
        return await Gerencia.findOne({
            where: {
                gerenciaId
            }
        });
    }

    async function update(gerenciaId: number, body: GerenciaBody) {
        const condicion = {
            where: {
                gerenciaId
            }
        };

        return await Gerencia.update(body, condicion);
    }

    return {
        create,
        findAll,
        findById,
        update,
    }
}