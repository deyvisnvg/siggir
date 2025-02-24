'use client'

import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'keep-react'
import { IconBuildingWarehouse } from "@tabler/icons-react";

export default function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Ingresa un e-mail válido.')
                .required('El email es obligatorio.'),
            password: Yup.string()
                .min(3, 'Ingrese al menos 3 caracteres.')
                .required('La contraseña es obligatoria.'),
        }),
        onSubmit: (values) => {
            const { email, password } = values;

            if (email != "admin@gmail.com") {
                toast.error("El usuario es incorrecto")
            }
            if (password != "123") {
                toast.error("La contraseña es incorrecta")
            }
            if (email == "admin@gmail.com" && password == "123") {
                toast.success("Inicio de sesion satisfactorio")
                navigate('/home');
            }
        },
    });

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="absolute top-0 left-0 font-bold p-6 text-2xl flex items-center gap-3">
                <IconBuildingWarehouse className='size-8' />
                SIGIR
            </div>
            <div className="rounded-2xl p-12 shadow-2xl bg-white ">
                <h2 className="text-center mb-7 font-bold text-heading-5">Iniciar Sesión</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="email" className="text-sm font-medium text-cyan-900">Correo Electrónico</label>
                        <input type="email"
                            id="email"
                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                            placeholder="example@correo.com"
                            {...formik.getFieldProps('email')}
                        />
                        {
                            formik.touched.email && formik.errors.email ? (
                                <p className="pl-1 mt-0.5 text-xs text-red-600">{formik.errors.email}</p>
                            ) : null
                        }
                    </div>
                    <div className="flex flex-col mb-7">
                        <label htmlFor="password" className="text-sm font-medium text-cyan-900">Contraseña</label>
                        <input type="password"
                            id="password"
                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                            placeholder="password"
                            {...formik.getFieldProps('password')}
                        />
                        {
                            formik.touched.password && formik.errors.password ? (
                                <p className="pl-1 mt-0.5 text-xs text-red-600">{formik.errors.password}</p>
                            ) : null
                        }
                    </div>
                    <div className="text-center">
                        <button type="submit" className="border rounded-md px-2 py-1.5 text-white text-sm bg-green-800 hover:bg-green-700">
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}