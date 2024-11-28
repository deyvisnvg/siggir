'use strict'

import { Foda } from "../models";
import { FodaBody } from "../../types/Foda";

export const FodaModule = () => {
    async function create(body: FodaBody) {
        return await Foda.create({ ...body });
    }

    async function findAll() {
        return await Foda.findAll();
    }

    async function findById(fodaId: number) {
        return await Foda.findOne({
            where: {
                fodaId
            }
        });
    }

    async function update(fodaId: number, body: FodaBody) {
        const condicion = {
            where: {
                fodaId
            }
        };

        return await Foda.update(body, condicion);
    }

    return {
        create,
        findAll,
        findById,
        update,
    }
}