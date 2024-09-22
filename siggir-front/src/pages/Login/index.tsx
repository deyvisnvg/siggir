import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username == "admin@gmail.com" && password == "1") {
            navigate('/menu');
        } else {
            alert('Credenciales incorrectas');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="absolute top-0 left-0 font-bold p-6 text-2xl">(icon) SIGGIR</div>
            <div className="rounded-2xl p-12 shadow-2xl bg-white ">
                <h2 className="text-center mb-7 font-bold text-3xl">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-5">
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email"
                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                            placeholder="example@correo.com"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col mb-7">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password"
                            className="border border-gray-400 rounded-md px-3 py-1.5 text-sm"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="border rounded-md px-2 py-1.5 text-white text-sm bg-green-800 hover:bg-green-700 ">Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </div>
    )
}