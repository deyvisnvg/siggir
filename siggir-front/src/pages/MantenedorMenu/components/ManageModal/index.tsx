import { ModalComponent } from '@/components';
import { MenuAdd, MenuEdit } from '@/pages/MantenedorMenu/components';

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
                return <MenuAdd {...extraProps} />;
            case 'edit':
                return <MenuEdit {...extraProps} />;
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
                    'Registrar Menu' :
                    'Editar Menu'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}