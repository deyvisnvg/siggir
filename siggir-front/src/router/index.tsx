import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Home,
    Login,
    MantenedorArea,
    MantenedorCargo,
    MantenedorUsuario,
    MantenedorGerencia,
    MantenedorMacroproceso,
    MantenedorProceso,
    MantenedorSubProceso,
    MantenedorPerfiles,
    MantenedorAsigUsuario,
    MantenedorMenu,
    MantenedorAsigPerfiles
} from "@/pages";
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
                        <Route path="/mantenedorCargo" element={<MantenedorCargo />} />
                        <Route path="/mantenedorArea" element={<MantenedorArea />} />
                        <Route path="/mantenedorGerencia" element={<MantenedorGerencia />} />
                        <Route path="/mantenedorMacroproceso" element={<MantenedorMacroproceso />} />
                        <Route path="/mantenedorProceso" element={<MantenedorProceso />} />
                        <Route path="/mantenedorSubProceso" element={<MantenedorSubProceso />} />
                        <Route path="/mantenedorPerfiles" element={<MantenedorPerfiles />} />
                        <Route path="/mantenedorAsigUsuario" element={<MantenedorAsigUsuario />} />
                        <Route path="/mantenedorMenu" element={<MantenedorMenu />} />
                        <Route path="/mantenedorAsigPerfiles" element={<MantenedorAsigPerfiles />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}