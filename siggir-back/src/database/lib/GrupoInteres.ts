'use strict'

import { GrupoInteres } from "../models";
import { GrupoInteresBody } from "../../types/GrupoInteres";

export const GrupoInteresModule = () => {
    async function create(body: GrupoInteresBody) {
        return await GrupoInteres.create({ ...body });
    }

    async function findAll() {
        return await GrupoInteres.findAll();
    }

    async function findById(grupoInteresId: number) {
        return await GrupoInteres.findOne({
            where: {
                grupoInteresId
            }
        });
    }

    async function update(grupoInteresId: number, body: GrupoInteresBody) {
        const condicion = {
            where: {
                grupoInteresId
            }
        };

        return await GrupoInteres.update(body, condicion);
    }

    return {
        create,
        findAll,
        findById,
        update,
    }
}