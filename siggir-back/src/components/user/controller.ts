import { Request, Response } from "express";
import { UsuarioModule, PersonaModule, EmpleadoModule } from "../../database/lib";
import { success, failure } from "../../responses";
import { sequelize } from "../../database";

const { create, findAll, findAllList, findById, update } = UsuarioModule();
const { create: createPersona, update: updatePersona } = PersonaModule();
const { create: createEmpleado, update: updateEmpleado } = EmpleadoModule();

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await findAll();
        /* let { email, password } = req.body;
        let context = {};
        let status = 400;

        const user = await prisma.user.findFirst({
            where: { email }
        });

        if (user) {
            const valid_pass = await matchPassword(password, user.password);

            if (valid_pass) {
                const token = sign({
                    id: user.id,
                    name: user.name,
                    email: user.email
                })
                status = 200;
                context = {
                    message: "successfully logged in",
                    user: {
                        name: user.name,
                        email: user.email,
                        token: token
                    }
                }
            } else {
                status = 401;
                context = {
                    error: "password is not correct",
                }
            }
        } else {
            status = 404;
            context = {
                error: "email has not be found",
            }
        } */

        res.status(200).json({
            ok: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const addUser = async (req: Request, res: Response): Promise<void> => {
    const transaction = await sequelize.transaction();

    try {
        const { body } = req;
        const {
            userId,
            user,
            password,
            estado,
            dni,
            nombres,
            apellidos,
            email,
            fechaNacimiento,
            empleadoId,
            cargoId
        } = body;

        const bodyUser = {
            userId,
            user,
            password,
            estado
        }
        const bodyPersona = {
            dni,
            nombres,
            apellidos,
            email,
            fechaNacimiento,
            userId,
            empleadoId
        }
        const bodyEmpleado = {
            empleadoId,
            cargoId
        }

        const [usuario, persona, empleado] = await Promise.all([
            await create(bodyUser, transaction),
            await createEmpleado(bodyEmpleado, transaction),
            await createPersona(bodyPersona, transaction)
        ]);

        await transaction.commit();

        success({ res, status: 201, data: { usuario, persona, empleado } });
    } catch (error) {
        await transaction.rollback();
        failure({ res, status: 500, message: error });
    }
}

export const findAllListUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const user = await findAllList();

        res.status(200).json({
            ok: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const findByIdUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { params } = req;
        const personaId = Number(params.id);
        const usuario = await findById(personaId);

        if (!usuario) {
            success({ res, status: 204, data: usuario });
            return;
        }

        success({ res, status: 200, data: usuario });
    } catch (error) {
        failure({ res, status: 500, message: error });
    }
}

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    const transaction = await sequelize.transaction();
    console.log(req.body)

    try {
        const { params, body } = req;
        const {
            userId,
            user,
            password,
            estado,
            dni,
            nombres,
            apellidos,
            email,
            fechaNacimiento,
            empleadoId,
            cargoId
        } = body;
        const personaId = Number(params.id);

        const bodyUser = {
            userId,
            user,
            password,
            estado
        }
        const bodyPersona = {
            dni,
            nombres,
            apellidos,
            email,
            fechaNacimiento,
            userId,
            empleadoId
        }
        const bodyEmpleado = {
            empleadoId,
            cargoId
        }

        const [usuario, persona, empleado] = await Promise.all([
            await update(body.userId, bodyUser, transaction),
            await updateEmpleado(body.empleadoId, bodyEmpleado, transaction),
            await updatePersona(personaId, bodyPersona, transaction)
        ])

        await transaction.commit();

        /*if (usuario[0] === 0 || persona[0] === 0 || empleado[0] === 0) {
            success({ res, status: 204, data: { usuario, persona, empleado }});
            return;
        } */

        success({ res, status: 200, data: { usuario, persona, empleado } });
    } catch (error) {
        await transaction.rollback();
        failure({ res, status: 500, message: error });
    }
}