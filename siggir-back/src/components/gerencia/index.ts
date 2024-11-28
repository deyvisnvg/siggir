import { Router } from "express";
import * as controller from "./controller";
import { gerenciaSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const gerenciaRouter: Router = Router();

gerenciaRouter.get("/", controller.findAllGerencia);
gerenciaRouter.get("/:id", controller.findByIdGerencia);
gerenciaRouter.put("/:id", validate(gerenciaSchema), controller.updateGerencia);
gerenciaRouter.post("/add", validate(gerenciaSchema), controller.addGerencia);

export default gerenciaRouter;