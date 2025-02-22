import { Router } from "express";
import * as controller from "./controller";
import { subPeriodoSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const subperiodoRouter: Router = Router();

/* subperiodoRouter.get("/", controller.findAllPeriodo); */
/* subperiodoRouter.get("/:id", controller.findByIdSubPeriodo); */
subperiodoRouter.get("/raw/all/:id", controller.findAllByIdGestionSubPeriodoRaw);
subperiodoRouter.get("/all/:id", controller.findAllByIdGestionSubPeriodo);
subperiodoRouter.get("/all", controller.findByParamsSubPeriodo);
/* subperiodoRouter.put("/:id", validate(periodoSchema), controller.updatePeriodo);*/
subperiodoRouter.post("/add", validate(subPeriodoSchema), controller.addSubPeriodo);

export default subperiodoRouter;