import { ModalComponent } from '@/components';
import { UsuarioAdd, UsuarioEdit } from '@/pages/MantenedorUsuario/components';

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
                return <UsuarioAdd {...extraProps} />;
            case 'edit':
                return <UsuarioEdit {...extraProps} />;
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
                    'Registrar Usuario' :
                    'Editar Usuario'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}