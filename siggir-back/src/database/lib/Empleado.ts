'use strict'

import { Empleado } from "../../database/models";
import { EmpleadoBody } from "../../types/Empleado";
import { Transaction } from "sequelize";

export const EmpleadoModule = () => {
    async function create(body: EmpleadoBody, transaction: Transaction) {
        return await Empleado.create({ ...body }, { transaction });
    }

    /*     async function findAll() {
            return await Area.findAll({
                include: [{
                    model: Gerencia
                }],
                raw: true,
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
    */
    async function update(empleadoId: number, body: EmpleadoBody, transaction: Transaction) {
        const condicion = {
            where: {
                empleadoId
            },
            transaction
        };

        return await Empleado.update(body, condicion);
    }

    return {
        create,
        update,
        /*         findAll,
                findById,*/
    }
}