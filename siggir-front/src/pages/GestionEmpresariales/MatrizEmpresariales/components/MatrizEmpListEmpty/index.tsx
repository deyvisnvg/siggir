'use client'

export default function MatrizEmpListEmpty() {


    return (
        <>
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
                </div> */}
                <div>No hay datos disponibles.</div>
            </div>

        </>
    )
}