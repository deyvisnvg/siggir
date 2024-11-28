import { Router } from "express";
import * as controller from "./controller";
import { cargoSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const cargoRouter: Router = Router();

cargoRouter.get("/", controller.findAllCargo);
cargoRouter.get("/:id", controller.findByIdCargo);
cargoRouter.put("/:id", validate(cargoSchema), controller.updateCargo);
cargoRouter.post("/add", validate(cargoSchema), controller.addCargo);

export default cargoRouter;