import { ModalComponent } from '@/components';
import { AreaAdd, AreaEdit } from '@/pages/MantenedorArea/components';

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
                return <AreaAdd {...extraProps} />;
            case 'edit':
                return <AreaEdit {...extraProps} />;
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
                    'Registrar Area' :
                    'Editar Area'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}