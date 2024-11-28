import { ModalComponent } from '@/components';
import { FodaAdd, FodaEdit } from '@/pages/MantenedorFoda/components';

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
                return <FodaAdd {...extraProps} />;
            case 'edit':
                return <FodaEdit {...extraProps} />;
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
                    'Registrar Foda' :
                    'Editar Foda'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}