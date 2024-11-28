import { ModalComponent } from '@/components';
import { CargoAdd, CargoEdit } from '@/pages/MantenedorCargo/components';

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
                return <CargoAdd {...extraProps} />;
            case 'edit':
                return <CargoEdit {...extraProps} />;
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
                    'Registrar Cargo' :
                    'Editar Cargo'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}