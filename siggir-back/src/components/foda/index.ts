import { Router } from "express";
import * as controller from "./controller";
import { fodaSchema } from "../../validators";
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const FodaRouter: Router = Router();

FodaRouter.get("/", controller.findAllFoda);
FodaRouter.get("/:id", controller.findByIdFoda);
FodaRouter.put("/:id", validate(fodaSchema), controller.updateFoda);
FodaRouter.post("/add", validate(fodaSchema), controller.addFoda);

export default FodaRouter;