import { ModalComponent } from '@/components';
import { GrupoInteresAdd, GrupoInteresEdit } from '@/pages/MantenedorGrupoInteres/components';

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
                return <GrupoInteresAdd {...extraProps} />;
            case 'edit':
                return <GrupoInteresEdit {...extraProps} />;
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
                    'Registrar Grupo Interes' :
                    'Editar Grupo Interes'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}