import { DropdownComponent, TooltipHint } from "@/components";
import { RiesgoController } from "@/controllers";
import { useEffectOnce } from "@/hooks/useEffectOnce";
import { MatrizEmpListEmpty } from "./components";

export default function MatrizEmpresariales() {
    const storedData = localStorage.getItem("RIESGO_SELECTED");

    const { riesgos, findAllRiesgoByIdGestion } = RiesgoController();

    const initialize = () => {
        if (storedData) {
            const { gestionId } = JSON.parse(storedData);
            findAllRiesgoByIdGestion(gestionId);
        }
    }

    useEffectOnce(initialize);

    if (riesgos == undefined) {
        return <div>Cargando...</div>;
    }

    if (riesgos.length == 0) {
        return (
            <MatrizEmpListEmpty />
        )
    }
    return (
        <>
            <div className="max-w-6xl m-auto">
                <div className="flex flex-col items-center gap-5 p-3.5 mb-6">
                    <div className="">
                        <h2 className="text-heading-6 font-semibold text-metal-900 dark:text-white">Matriz de Riesgos Empresariales</h2>
                    </div>
                    {/* <div className="flex justify-between gap-5 w-full ">
                        <ButtonComponent
                            iconButton={Plus}
                            size="sm"
                            text="Registrar"
                            color="success"
                            onClick={() => handleOpenModal('add', { getRiesgoByIdGestion })}
                        />
                        <SearchBar
                            placeholder="Buscar..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div> */}
                </div>
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-white uppercase bg-gray-600">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Nivel
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Gerencia Responsable
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre del Proceso
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    Título
                                </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Código Riesgo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Descripción Riesgo
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    Procesos impactados
                                </th> */}
                                {/* <th scope="col" className="px-6 py-3">
                                    Foda
                                </th> */}
                                {/* <th scope="col" className="px-6 py-3">
                                    Grupo de interes
                                </th> */}
                                <th scope="col" className="px-6 py-3">
                                    Origen Riesgo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Frecuencia Riesgo
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tipo Riesgo
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                riesgos.map((item: any) => (
                                    <tr key={item.riesgoId} className="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {item.nivel.descripcion}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.gerencia.gerenciaNombre}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.subproceso.subproNombre}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.riesgoCodigo}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.riesgoDescripcion}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.origen.descripcion}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.frecuenciaRiesgo.descripcion}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.tipoRiesgo.descripcion}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <ManageModal
                modalType={modalType}
                extraProps={extraProps}
                isOpen={openModal}
                closeModal={handleCloseModal}
            />
            <Pagination
                pageCount={pageCount}
                onPageChange={handlePageChange}
            /> */}
        </>
    )
}