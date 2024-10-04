import { useEffect, useState } from "react";
import { ButtonComponent } from "@/components";
import { USUARIOS } from '@/core/Usuarios';
import { Usuario } from "@/types/Usuario";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";

interface Props {
    id: number | string;
}

export default function UsuarioEdit({ id }: Readonly<Props>) {
    const [user, setUser] = useState<Usuario | null>(null);

    useEffect(() => {
        const userData = USUARIOS.find((usuario: Usuario) => usuario.id === id);
        if (userData) {
            setUser(userData);
        } else {
            console.error('Usuario no encontrado');
        }
    }, [id])
    return (
        <form action="">
            {
                user && (
                    <div>
                        <div>
                            <span className="text-base font-medium text-cyan-800 px-0.5 border-b-2 border-double">Datos Persona</span>
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 pt-3.5">
                                <div className="flex flex-col">
                                    <label htmlFor="dni" className="text-sm font-medium">DNI</label>
                                    <input type="text"
                                        id="dni"
                                        className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                        placeholder="Ingrese dni"
                                        value={user.id}
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
                            <div className="grid grid-cols-1 gap-x-8 gap-y-2 pt-3.5">
                                <div className="flex flex-col">
                                    <label htmlFor="usuario" className="text-sm font-medium">Usuario</label>
                                    <div className="flex items-center gap-3">
                                        <input type="text"
                                            id="usuario"
                                            className="w-full border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                            placeholder="Ingrese usuario"
                                            readOnly
                                        />
                                        <Cog6ToothIcon className="size-5 cursor-pointer hover:text-blue-700" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password" className="text-sm font-medium">Contraseña</label>
                                    <div className="flex items-center gap-3">
                                        <input type="password"
                                            id="password"
                                            className="w-full border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                                            placeholder="Ingrese contraseña"
                                            readOnly
                                        />
                                        <Cog6ToothIcon className="size-5 cursor-pointer hover:text-blue-700" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <div className="text-center pt-5">
                <ButtonComponent
                    type="submit"
                    size="sm"
                    text="Editar"
                    color="primary"
                />
            </div>
        </form>
    )
}