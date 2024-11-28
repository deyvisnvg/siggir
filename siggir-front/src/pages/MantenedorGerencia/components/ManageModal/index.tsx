import { ModalComponent } from '@/components';
import { GerenciaAdd, GerenciaEdit } from '@/pages/MantenedorGerencia/components';

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
                return <GerenciaAdd {...extraProps} />;
            case 'edit':
                return <GerenciaEdit {...extraProps} />;
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
                    'Registrar Gerencia' :
                    'Editar Gerencia'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}