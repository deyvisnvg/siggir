import { Router } from "express";
import * as controller from "./controller";
/* import { catalogoSchema } from "../../validators"; */
import { validate } from "../../middlewares/validation";
/* import { checkOwn } from "../../lib/jwt"; */

const catalogoRouter: Router = Router();

catalogoRouter.get("/all", controller.findByParamsCatalogo);

export default catalogoRouter;