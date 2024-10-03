import { ButtonComponent } from "@/components";

export default function UsuarioAdd() {
    return (
        <form action="">
            <div>
                <div>
                    <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Datos Persona</span>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 pt-3.5">
                        <div className="flex flex-col">
                            <label htmlFor="dni" className="text-sm font-medium">DNI</label>
                            <input type="text"
                                id="dni"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese dni"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="nombres" className="text-sm font-medium">Nombres</label>
                            <input type="text"
                                id="nombres"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese nombres"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="apellidos" className="text-sm font-medium">Apellidos</label>
                            <input type="text"
                                id="apellidos"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese apellidos"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium">E-mail</label>
                            <input type="email"
                                id="email"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese correo electrónico"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="fechaNacimiento" className="text-sm font-medium">Fecha Nacimiento</label><span></span>
                            <input type="date"
                                id="fechaNacimiento"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                            />
                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="cargo" className="text-sm font-medium">Cargo</label>
                            <input type="text"
                                id="cargo"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese cargo"
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-5">
                    <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Datos Usuario</span>
                    <div className="grid grid-cols-1 gap-x-10 gap-y-2.5 pt-3.5">
                        <div className="flex flex-col">
                            <label htmlFor="usuario" className="text-sm font-medium">Usuario</label>
                            <input type="text"
                                id="usuario"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese usuario"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
                            <input type="text"
                                id="password"
                                className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                placeholder="Ingrese contraseña"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-5">
                <ButtonComponent
                    type="submit"
                    size="sm"
                    text="Registrar"
                    color="primary"
                />
            </div>
        </form>
    )
}