import { ModalComponent } from '@/components';
import { PermisosMenuAdd, PermisosMenuEdit } from '@/pages/MantenedorPermisosMenu/components';

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
                return <PermisosMenuAdd {...extraProps} />;
            case 'edit':
                return <PermisosMenuEdit {...extraProps} />;
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
                    'Asignar Menu' :
                    'Editar Asignar Menu'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}