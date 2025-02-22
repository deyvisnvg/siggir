'use strict'

import { Catalogo, GestionRiesgo, Periodo, Subperiodo } from "../../database/models";
import { SubperiodoBody } from "../../types/Subperiodo";

export const SubperiodoModule = () => {
    async function create(body: SubperiodoBody) {
        return await Subperiodo.create({ ...body });
    }

    /*async function findAll() {
        return await Subperiodo.findAll();
    }

    async function findById(subperiodoId: number) {
        return await Subperiodo.findOne({
            where: {
                subperiodoId
            }
        });
    }
 
    async function update(subperiodoId: number, body: SubperiodoBody) {
        const condicion = {
            where: {
                subperiodoId
            }
        };
 
        return await Subperiodo.update(body, condicion);
    } */

    async function findAllByIdGestionRaw(gestionId: number) {
        return await Subperiodo.findAll({
            where: {
                gestionId
            },
            include: [
                {
                    model: Periodo,
                },
                {
                    model: GestionRiesgo
                }
            ],
            raw: true,
        });
    }

    async function findAllByIdGestion(gestionId: number) {
        return await Subperiodo.findAll({
            where: {
                gestionId
            },
            include: [
                {
                    model: Periodo,
                },
                {
                    model: GestionRiesgo
                }
            ],
        });
    }

    async function findAllByParams(params: { gestionId: number; periodoId: number, frecuenciaId: number }) {
        const { gestionId, periodoId, frecuenciaId } = params;
        const condicion = {
            where: {
                gestionId,
                periodoId,
                frecuenciaId
            }
        };

        return await Subperiodo.findAll(condicion);

        /* (params: { gestionId: number; periodoId?: number, subperiodoFrecuencia?: string }) */
        /* console.log(gestionId)
        console.log(periodoId)
        console.log(subperiodoFrecuencia) */

        /* if (periodoId) {
            condicion.where.periodoId = periodoId;
        }
        if (subperiodoFrecuencia) {
            condicion.where.subperiodoFrecuencia = subperiodoFrecuencia;
        } */
    }

    return {
        create,
        /*findAll,
         findById,
         update, */
        findAllByIdGestionRaw,
        findAllByIdGestion,
        findAllByParams
    }
}