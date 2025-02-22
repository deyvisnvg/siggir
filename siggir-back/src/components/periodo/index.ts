import { Router } from "express";
import * as controller from "./controller";
import { periodoSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const periodoRouter: Router = Router();

periodoRouter.get("/", controller.findAllPeriodo);
periodoRouter.get("/:id", controller.findByIdPeriodo);
periodoRouter.put("/:id", validate(periodoSchema), controller.updatePeriodo);
periodoRouter.post("/add", validate(periodoSchema), controller.addPeriodo);

export default periodoRouter;