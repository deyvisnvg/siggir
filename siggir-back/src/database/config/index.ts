'use strict'

import { Dialect } from "sequelize/types";
import env from "../../config/env"
// const debug = require('debug')('proyectogps:db:setup') // Aqui le digo que muestre específicamente en que modulo o archivo estoy haciendo debug // El modulo de debug me permite tener mensajes de logs que yo voya a imprimir en pantalla, siempre en cuando yo tenga una variable de entorno configurada

export default {
    dialect: 'mysql' as Dialect,
    host: env.DB_HOST,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    pool: {
        max: 5,
        min: 0,
        require: 30000,
        idle: 10000,
    },
    logging: false,
};