'use strict'

import { Transaction } from "sequelize";
import { Persona } from "../../database/models";
import { PersonaBody } from "../../types/Persona";

export const PersonaModule = () => {
    async function create(body: PersonaBody, transaction: Transaction) {
        return await Persona.create({ ...body }, { transaction });
    }

    /*     async function findAll() {
            return await Area.findAll({
                include: [{
                    model: Gerencia
                }],
                raw: true,
            });
        }*/

    async function findByDni(dni: string) {
        return await Persona.findOne({
            where: {
                dni
            }
        });
    }

    async function update(personaId: number, body: PersonaBody, transaction: Transaction) {
        const condicion = {
            where: {
                personaId
            },
            transaction
        };

        return await Persona.update(body, condicion);
    }

    return {
        create,
        update,
        findByDni,
        /*         findAll,
                findById,*/
    }
}