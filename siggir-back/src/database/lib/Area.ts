'use strict'

import { Area, Cargo, Gerencia } from "../../database/models";
import { AreaBody } from "../../types/Area";

export const AreaModule = () => {
    async function create(body: AreaBody) {
        return await Area.create({ ...body });
    }

    async function findAllRaw() {
        return await Area.findAll({
            include: [{
                model: Gerencia
            }],
            raw: true,
        });
    }

    async function findAll() {
        return await Area.findAll({
            include: [
                {
                    model: Gerencia
                },
                {
                    model: Cargo
                }
            ],
        });
    }

    async function findById(areaId: number) {
        return await Area.findOne({
            where: {
                areaId
            },
            include: [{
                model: Gerencia
            }],
        });
    }

    async function update(areaId: number, body: AreaBody) {
        const condicion = {
            where: {
                areaId
            },
        };

        return await Area.update(body, condicion);
    }

    return {
        create,
        findAllRaw,
        findAll,
        findById,
        update,
    }
}