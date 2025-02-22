import { ModalComponent } from '@/components';
import { RiesgoAdd, RiesgoEdit } from '@/pages/Prueba/MantenedorRiesgo/components';

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
                return <RiesgoAdd {...extraProps} />;
            case 'edit':
                return <RiesgoEdit {...extraProps} />;
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
                    'Registrar Riesgo' :
                    'Editar Riesgo'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}