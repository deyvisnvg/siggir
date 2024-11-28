import { ModalComponent } from '@/components';
import { SubProcesoAdd, SubProcesoEdit, SubProcesoAddProceso, SubProcesoEditProceso } from '@/pages/MantenedorSubProceso/components';

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
                return <SubProcesoAdd {...extraProps} />;
            case 'edit':
                return <SubProcesoEdit {...extraProps} />;
            case 'addProceso':
                return <SubProcesoAddProceso {...extraProps} />;
            case 'editProceso':
                return <SubProcesoEditProceso {...extraProps} />;
            default:
                return null;
        }
    };

    return (
        <ModalComponent
            isOpen={isOpen}
            onClose={closeModal}
            titleModal={
                modalType === 'add' || modalType === 'addProceso' ?
                    'Registrar SubProceso' :
                    'Editar SubProceso'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}