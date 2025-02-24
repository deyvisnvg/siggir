import { Router } from "express";
import * as controller from "./controller";
import { planAccionSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
import upload from "../../services/upload";
/* import { checkOwn } from "../../lib/jwt"; */

const PlanAccionRouter: Router = Router();

/* PlanAccionRouter.get("/", controller.findAllRiesgo); */
PlanAccionRouter.get("/:id", controller.findByIdPlanAccion);
/* PlanAccionRouter.get("/all/:id", controller.findByAllIdRiesgo); */
PlanAccionRouter.get("/all/:id", controller.findAllPlanAccionByIdRiesgo);
/* PlanAccionRouter.put("/:id", validate(periodoSchema), controller.updatePeriodo);*/
PlanAccionRouter.post("/add", upload.array('planaccionSustento', 10), controller.addPlanAccion);

export default PlanAccionRouter;