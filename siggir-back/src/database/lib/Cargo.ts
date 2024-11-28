'use strict'

import { Cargo, Area } from "../../database/models";
import { CargoBody } from "../../types/Cargo";

export const CargoModule = () => {
    async function create(body: CargoBody) {
        return await Cargo.create({ ...body });
    }

    async function findAll() {
        return await Cargo.findAll({
            include: [{
                model: Area
            }],
            raw: true,
        });
    }

    async function findById(cargoId: number) {
        return await Cargo.findOne({
            where: {
                cargoId
            },
            include: [{
                model: Area
            }],
        });
    }

    async function update(cargoId: number, body: CargoBody) {
        const condicion = {
            where: {
                cargoId
            },
        };

        return await Cargo.update(body, condicion);
    }

    return {
        create,
        findAll,
        findById,
        update,
    }
}