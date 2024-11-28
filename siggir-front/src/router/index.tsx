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
    MantenedorMenu,
    MantenedorAsigPerfiles,
    MatrizCambioSignificativo,
    PruebaComponent,
    MantenedorPermisosMenu,
    MantenedorGestionRiesgo,
    MantenedorGrupoInteres,
    MantenedorFoda
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
                        <Route path="/matrizCambioSignificativo" element={<MatrizCambioSignificativo />} />
                        <Route path="/mantenedorUsuario" element={<MantenedorUsuario />} />
                        <Route path="/mantenedorCargo" element={<MantenedorCargo />} />
                        <Route path="/mantenedorArea" element={<MantenedorArea />} />
                        <Route path="/mantenedorGerencia" element={<MantenedorGerencia />} />
                        <Route path="/mantenedorMacroproceso" element={<MantenedorMacroproceso />} />
                        <Route path="/mantenedorProceso" element={<MantenedorProceso />} />
                        <Route path="/mantenedorSubProceso" element={<MantenedorSubProceso />} />
                        <Route path="/mantenedorPerfiles" element={<MantenedorPerfiles />} />
                        <Route path="/mantenedorMenu" element={<MantenedorMenu />} />
                        <Route path="/mantenedorAsigPerfiles" element={<MantenedorAsigPerfiles />} />
                        <Route path="/mantenedorPermisosMenu" element={<MantenedorPermisosMenu />} />
                        <Route path="/mantenedorGestionRiesgo" element={<MantenedorGestionRiesgo />} />
                        <Route path="/mantenedorGrupoInteres" element={<MantenedorGrupoInteres />} />
                        <Route path="/mantenedorFoda" element={<MantenedorFoda />} />
                        <Route path="/pruebaComponent" element={<PruebaComponent />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}