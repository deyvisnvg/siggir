import { Router } from "express";
import * as controller from "./controller";
import { procesoSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const ProcesoRouter: Router = Router();

ProcesoRouter.get("/", controller.findAllProceso);
ProcesoRouter.get("/:id", controller.findByIdProceso);
ProcesoRouter.put("/:id", validate(procesoSchema), controller.updateProceso);
ProcesoRouter.post("/add", validate(procesoSchema), controller.addProceso);

export default ProcesoRouter;