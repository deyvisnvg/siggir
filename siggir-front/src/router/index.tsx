import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, MantenedorUsuario } from "@/pages";
import { MainLayout, MenuLayout } from "@/layout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Login />} />
                    <Route element={<MenuLayout />}>
                        <Route path="/home" element={<Home />} />
                        <Route path="/mantenedorUsuario" element={<MantenedorUsuario />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}