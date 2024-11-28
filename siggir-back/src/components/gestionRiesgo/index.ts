import { Router } from "express";
import * as controller from "./controller";
import { gestionRiesgoSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const GestionRiesgoRouter: Router = Router();

GestionRiesgoRouter.get("/", controller.findAllGestionRiesgo);
GestionRiesgoRouter.get("/:id", controller.findByIdGestionRiesgo);
GestionRiesgoRouter.put("/:id", validate(gestionRiesgoSchema), controller.updateGestionRiesgo);
GestionRiesgoRouter.post("/add", validate(gestionRiesgoSchema), controller.addGestionRiesgo);

export default GestionRiesgoRouter;