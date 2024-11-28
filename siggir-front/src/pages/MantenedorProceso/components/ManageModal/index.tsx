import { ModalComponent } from '@/components';
import { ProcesoAdd, ProcesoEdit, ProcesoAddMacro, ProcesoEditMacro } from '@/pages/MantenedorProceso/components';

interface Props {
    modalType: string;
    extraProps?: any;
    isOpen: boolean;
    closeModal: () => void;
}

export default function ManageModal({ modalType, extraProps, isOpen, closeModal }: Props) {
    const renderModalContent = () => {
        switch (modalType) {
            case 'add':
                return <ProcesoAdd {...extraProps} />;
            case 'edit':
                return <ProcesoEdit {...extraProps} />;
            case 'addMacro':
                return <ProcesoAddMacro {...extraProps} />;
            case 'editMacro':
                return <ProcesoEditMacro {...extraProps} />;
            default:
                return null;
        }
    };

    return (
        <ModalComponent
            isOpen={isOpen}
            onClose={closeModal}
            titleModal={
                modalType === 'add' || modalType === 'addMacro' ?
                    'Registrar Proceso' :
                    'Editar Proceso'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}