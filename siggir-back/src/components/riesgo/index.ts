import { Router } from "express";
import * as controller from "./controller";
import { riesgoProcesoSchema, riesgoEntidadSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const riesgoRouter: Router = Router();

/* riesgoRouter.get("/", controller.findAllRiesgo); */
riesgoRouter.get("/:id", controller.findByIdRiesgo);
/* riesgoRouter.get("/all/:id", controller.findByAllIdRiesgo); */
riesgoRouter.get("/all/:id", controller.findAllRiesgoByIdGestion);
/* riesgoRouter.put("/:id", validate(periodoSchema), controller.updatePeriodo);*/
riesgoRouter.post("/add", validate(riesgoProcesoSchema), controller.addRiesgo);
riesgoRouter.post("/add/entidad", validate(riesgoEntidadSchema), controller.addRiesgo);

export default riesgoRouter;