'use strict'

import { Catalogo, Control, Gerencia, GestionRiesgo, IndicadorKri, PlanAccion, Riesgo, Subperiodo, Subproceso } from "../../database/models";
import { RiesgoBody } from "../../types/Riesgo";

export const RiesgoModule = () => {
    async function create(body: RiesgoBody) {
        return await Riesgo.create({ ...body });
    }

    async function findById(riesgoId: string) {
        return await Riesgo.findOne({
            where: {
                riesgoId
            },
            include: [
                {
                    model: Catalogo,
                    as: 'nivel',
                },
            ]
        });
    }

    async function findAllByIdGestion(gestionId: number) {
        return await Riesgo.findAll({
            /* attributes: ["riesgo_id", "riesgo_codigo", "riesgo_descripcion"], */
            include: [
                {
                    model: Subperiodo,
                    include: [
                        {
                            model: GestionRiesgo,
                            where: {
                                gestionId
                            },
                            required: true
                        }
                    ],
                    required: true
                },
                {
                    model: Control,
                },
                {
                    model: PlanAccion,
                },
                {
                    model: IndicadorKri,
                },
                {
                    model: Gerencia,
                },
                {
                    model: Subproceso,
                    as: "subproceso"
                },
                {
                    model: Catalogo,
                    as: 'nivel',
                },
                {
                    model: Catalogo,
                    as: 'origen',
                },
                {
                    model: Catalogo,
                    as: 'frecuenciaRiesgo',
                },
                {
                    model: Catalogo,
                    as: 'tipoRiesgo',
                }
            ],
        });
    }

    async function existsByName(riesgo_codigo: string) {
        const count = await Riesgo.count({
            where: {
                riesgo_codigo
            }
        });
        return count > 0;
    }

    async function update(riesgoId: string, body: RiesgoBody) {
        const condicion = {
            where: {
                riesgoId
            }
        };

        return await Riesgo.update(body, condicion);
    }

    /* async function findAllByIdGestion(gestionId: number) {
        const riesgos = await Riesgo.findAll({
            include: [
                { model: Catalogo, as: 'origen'},
            ],
            raw:true
        });
        console.log(riesgos.map(r => r.nivel));
        testOrigen();
    }

    async function testOrigen() {
        const riesgos = await Riesgo.findAll({
            include: [
                {
                    model: Catalogo,
                    as: 'origen'
                }
            ]
        });
        console.log(riesgos.map(r => r.origen));
    } */

    return {
        create,
        findAllByIdGestion,
        findById,
        existsByName,
        update,
    }
}