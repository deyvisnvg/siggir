import { Router } from "express";
import * as controller from "./controller";
import { subprocesoSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const subprocesoRouter: Router = Router();

subprocesoRouter.get("/", controller.findAllSubproceso);
subprocesoRouter.get("/:id", controller.findByIdSubproceso);
subprocesoRouter.put("/:id", validate(subprocesoSchema), controller.updateSubproceso);
subprocesoRouter.post("/add", validate(subprocesoSchema), controller.addSubproceso);

export default subprocesoRouter;