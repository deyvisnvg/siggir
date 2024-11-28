import { Router } from "express";
import * as controller from "./controller";
import { macroprocesoSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const MacroprocesoRouter: Router = Router();

MacroprocesoRouter.get("/", controller.findAllMacroproceso);
MacroprocesoRouter.get("/:id", controller.findByIdMacroproceso);
MacroprocesoRouter.put("/:id", validate(macroprocesoSchema), controller.updateMacroproceso);
MacroprocesoRouter.post("/add", validate(macroprocesoSchema), controller.addMacroproceso);

export default MacroprocesoRouter;