import { ModalComponent } from '@/components';
import { GestionRiesgoAdd, GestionRiesgoEdit } from '@/pages/MantenedorGestionRiesgo/components';

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
                return <GestionRiesgoAdd {...extraProps} />;
            case 'edit':
                return <GestionRiesgoEdit {...extraProps} />;
            default:
                return null;
        }
    };

    return (
        <ModalComponent
            isOpen={isOpen}
            onClose={closeModal}
            titleModal={modalType === 'add'
                ? 'Registrar Riesgo'
                : 'Editar Riesgo'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}