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
    ["periodo", ROUTES.PeriodoRouter],
    ["subperiodo", ROUTES.SubPeriodoRouter],
    ["catalogo", ROUTES.CatalogoRouter],
    ["riesgo", ROUTES.RiesgoRouter],
    ["control", ROUTES.ControlRouter],
    ["planaccion", ROUTES.PlanAccionRouter],
    ["indicadorkri", ROUTES.IndicadorKriRouter],
];

const routes = (app: Application): void => {
    _routes.forEach(([path, controller]) => {
        app.use(`/api/v1/${path}`, controller);
    });
};

export default routes;