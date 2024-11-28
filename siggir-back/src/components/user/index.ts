import { Router } from "express";
import * as controller from "./controller";
import { validate } from "../../middlewares/validation";
import { userPerEmpSchema } from "../../validators";
/* import { checkOwn } from "../../lib/jwt"; */

const userRouter: Router = Router();

userRouter.post("/login", controller.login);
userRouter.get("/list", controller.findAllListUser);
userRouter.get("/:id", controller.findByIdUser);
userRouter.put("/:id", validate(userPerEmpSchema), controller.updateUser);
userRouter.post("/add", validate(userPerEmpSchema), controller.addUser);

export default userRouter;