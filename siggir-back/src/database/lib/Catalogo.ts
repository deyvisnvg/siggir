'use strict'

import { Op } from "sequelize";
import { Catalogo } from "../../database/models";
/* import { CatalogoData } from "../../types/Catalogo"; */

export const CatalogoModule = () => {

    async function findAllByParams(params: { codigos: string[] }) {
        const { codigos } = params;
        const condicion = {
            where: {
                codigo: {
                    [Op.in]: codigos
                }
            }
        };

        return await Catalogo.findAll(condicion);
    }

    return {
        findAllByParams
    }
}