'use strict'

import { Periodo } from "../../database/models";
import { PeriodoBody } from "../../types/Periodo";

export const PeriodoModule = () => {
    async function create(body: PeriodoBody) {
        return await Periodo.create({ ...body });
    }

    async function findAll() {
        return await Periodo.findAll();
    }

    async function findById(periodoId: number) {
        return await Periodo.findOne({
            where: {
                periodoId
            }
        });
    }

    async function existsByName(periodoAnio: string) {
        const count = await Periodo.count({
            where: {
                periodoAnio
            }
        });
        return count > 0;
    }

    async function update(periodoId: number, body: PeriodoBody) {
        const condicion = {
            where: {
                periodoId
            }
        };

        return await Periodo.update(body, condicion);
    }

    return {
        create,
        findAll,
        findById,
        existsByName,
        update,
    }
}