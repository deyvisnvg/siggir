import { ModalComponent } from '@/components';
import { MacroprocesoAdd, MacroprocesoEdit } from '@/pages/MantenedorMacroproceso/components';

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
                return <MacroprocesoAdd {...extraProps} />;
            case 'edit':
                return <MacroprocesoEdit {...extraProps} />;
            default:
                return null;
        }
    };

    return (
        <ModalComponent
            isOpen={isOpen}
            onClose={closeModal}
            titleModal={
                modalType === 'add' ?
                    'Registrar Macroproceso' :
                    'Editar Macroproceso'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}