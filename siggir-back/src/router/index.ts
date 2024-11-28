import { type Application, Router } from "express";
import * as ROUTES from "../components";

const _routes: [string, Router][] = [
    ["user", ROUTES.UserRouter],
    ["persona", ROUTES.PersonaRouter],
    ["gerencia", ROUTES.GerenciaRouter],
    ["area", ROUTES.AreaRouter],
    ["cargo", ROUTES.CargoRouter],
    ["gestionRiesgo", ROUTES.GestionRiesgoRouter],
    ["grupoInteres", ROUTES.GrupoInteresRouter],
    ["foda", ROUTES.FodaRouter],
    ["macroproceso", ROUTES.MacroprocesoRouter],
    ["proceso", ROUTES.ProcesoRouter],
    ["subproceso", ROUTES.SubprocesoRouter],
];

const routes = (app: Application): void => {
    _routes.forEach(([path, controller]) => {
        app.use(`/api/v1/${path}`, controller);
    });
};

export default routes;