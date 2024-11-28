import { Sequelize } from "sequelize-typescript";
import config from "./config";
import {
    User,
    Gerencia,
    Area,
    Cargo,
    Persona,
    Perfil,
    Subproceso,
    Menu,
    Empleado,
    Proceso,
    Macroproceso,
    PerfilMenu,
    UsuarioPerfil,
    GestionRiesgo,
    GrupoInteres,
    Foda
} from "./models";

export const sequelize = new Sequelize({
    ...config,
    models: [
        User,
        Persona,
        Cargo,
        Empleado,
        Gerencia,
        Area,
        Macroproceso,
        Proceso,
        Subproceso,
        Perfil,
        Menu,
        PerfilMenu,
        UsuarioPerfil,
        GestionRiesgo,
        GrupoInteres,
        Foda
    ],
})