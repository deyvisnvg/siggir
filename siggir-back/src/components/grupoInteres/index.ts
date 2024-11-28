import { Router } from "express";
import * as controller from "./controller";
import { grupoInteresSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const GrupoInteresRouter: Router = Router();

GrupoInteresRouter.get("/", controller.findAllGrupoInteres);
GrupoInteresRouter.get("/:id", controller.findByIdGrupoInteres);
GrupoInteresRouter.put("/:id", validate(grupoInteresSchema), controller.updateGrupoInteres);
GrupoInteresRouter.post("/add", validate(grupoInteresSchema), controller.addGrupoInteres);

export default GrupoInteresRouter;