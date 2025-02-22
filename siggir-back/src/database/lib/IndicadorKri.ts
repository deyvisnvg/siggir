'use strict'

import { GestionRiesgo, IndicadorKri, Subperiodo, Riesgo } from "../models";
import { IndicadorKriBody } from "../../types/IndicadorKri";

export const IndicadorKriModule = () => {
    async function create(body: IndicadorKriBody) {
        return await IndicadorKri.create({ ...body });
    }

    async function findAllByIdRiesgo(riesgoId: string) {
        return await IndicadorKri.findAll({
            attributes: ["indicadorKri_id", "indicadorKri_codigo", "indicadorKri_descripcion"],
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

    async function existsByName(indicadorkriCodigo: string) {
        const count = await IndicadorKri.count({
            where: {
                indicadorkriCodigo
            }
        });
        return count > 0;
    }

    /* async function findById(periodoId: number) {
        return await IndicadorKri.findOne({
            where: {
                periodoId
            }
        });
    }

    async function update(periodoId: number, body: IndicadorKriBody) {
        const condicion = {
            where: {
                periodoId
            }
        };

        return await IndicadorKri.update(body, condicion);
    } */

    return {
        create,
        findAllByIdRiesgo,
        existsByName,
        /* findById,
        update, */
    }
}