import { ModalComponent } from '@/components';
import { AsigPerfilesAdd, AsigPerfilesEdit } from '@/pages/MantenedorAsigPerfiles/components';

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
                return <AsigPerfilesAdd {...extraProps} />;
            case 'edit':
                return <AsigPerfilesEdit {...extraProps} />;
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
                    'Asignar Perfil' :
                    'Editar Asignar Perfil'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}