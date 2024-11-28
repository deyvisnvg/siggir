import { Router } from "express";
import * as controller from "./controller";
/* import { validate } from "../../middlewares/validation";
import { userPerEmpSchema } from "../../validators"; */
/* import { checkOwn } from "../../lib/jwt"; */

const personaRouter: Router = Router();

personaRouter.get("/:id", controller.findByDniPersona);

export default personaRouter;