import { Router } from "express";
import * as controller from "./controller";
import { areaSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const areaRouter: Router = Router();

areaRouter.get("/", controller.findAllArea);
areaRouter.get("/:id", controller.findByIdArea);
areaRouter.put("/:id", validate(areaSchema), controller.updateArea);
areaRouter.post("/add", validate(areaSchema), controller.addArea);

export default areaRouter;