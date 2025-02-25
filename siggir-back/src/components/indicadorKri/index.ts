import { Router } from "express";
import * as controller from "./controller";
import { indicadorKriSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const IndicadorKriRouter: Router = Router();

/* IndicadorKriRouter.get("/", controller.findAllRiesgo); */
IndicadorKriRouter.get("/:id", controller.findByIdIndicadorKri);
/* IndicadorKriRouter.get("/all/:id", controller.findByAllIdRiesgo); */
IndicadorKriRouter.get("/all/:id", controller.findAllIndicadorKriByIdRiesgo);
IndicadorKriRouter.put("/:id", validate(indicadorKriSchema), controller.updateIndicadorKri);
IndicadorKriRouter.post("/add", validate(indicadorKriSchema), controller.addIndicadorKri);

export default IndicadorKriRouter;