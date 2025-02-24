import { Router } from "express";
import * as controller from "./controller";
import { controlSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
import upload from "../../services/upload";
/* import { checkOwn } from "../../lib/jwt"; */

const controlRouter: Router = Router();

/* controlRouter.get("/", controller.findAllRiesgo); */
controlRouter.get("/:id", controller.findByIdControl);
/* controlRouter.get("/all/:id", controller.findByAllIdRiesgo); */
controlRouter.get("/all/:id", controller.findAllControlByIdRiesgo);
/* controlRouter.put("/:id", validate(periodoSchema), controller.updatePeriodo);*/
controlRouter.post("/add", upload.array('controlSustento', 10), controller.addControl);
/* controlRouter.post("/add", controller.addControl); */

export default controlRouter;