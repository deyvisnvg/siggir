'use strict'

import { Empleado, Persona, User } from "../../database/models";
import { UsuarioBody } from "../../types/Usuario";
import { Transaction } from "sequelize";

export const UsuarioModule = () => {
    async function create(body: UsuarioBody, transaction: Transaction) {
        return await User.create({ ...body }, { transaction });
    }

    async function findAll() {
        return await User.findOne({
            include: [{
                model: Persona,
                include: [{
                    model: Empleado
                }]
            }],
        });
    }

    async function findAllList() {
        return await Persona.findAll({
            attributes: ['personaId', 'dni', 'nombres', 'apellidos'],
            include: [{
                attributes: ['userId', 'estado'],
                model: User
            }],
            raw: true,
        });
    }

    async function findById(personaId: number) {
        return await Persona.findOne({
            where: { personaId },
            include: [
                {
                    model: User,
                },
                {
                    model: Empleado
                }
            ],
        });
    }

    async function update(userId: number, body: UsuarioBody, transaction: Transaction) {
        const condicion = {
            where: {
                userId
            },
            transaction
        };

        return await User.update(body, condicion);
    }

    return {
        create,
        findAll,
        findAllList,
        findById,
        update,
    }
}