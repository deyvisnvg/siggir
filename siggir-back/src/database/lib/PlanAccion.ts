'use strict'

import { GestionRiesgo, PlanAccion, Subperiodo, Riesgo } from "../models";
import { PlanAccionBody } from "../../types/PlanAccion";
import { Transaction } from "sequelize";

export const PlanAccionModule = () => {
    async function create(body: PlanAccionBody, options: { transaction: Transaction }) {
        return await PlanAccion.create({ ...body }, options);
    }

    async function findAllByIdRiesgo(riesgoId: string) {
        return await PlanAccion.findAll({
            attributes: ["planAccion_id", "planAccion_codigo", "planAccion_descripcion"],
            include: [
                {
                    model: Riesgo,
                    where: {
                        riesgoId
                    }
                }
            ]
        });
    }

    async function existsByName(planaccionCodigo: string) {
        const count = await PlanAccion.count({
            where: {
                planaccionCodigo
            }
        });
        return count > 0;
    }

    /* async function findById(periodoId: number) {
        return await PlanAccion.findOne({
            where: {
                periodoId
            }
        });
    }

    async function update(periodoId: number, body: PlanAccionBody) {
        const condicion = {
            where: {
                periodoId
            }
        };

        return await PlanAccion.update(body, condicion);
    } */

    return {
        create,
        findAllByIdRiesgo,
        existsByName
        /* findById,
        update, */
    }
}