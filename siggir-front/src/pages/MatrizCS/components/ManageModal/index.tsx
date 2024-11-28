import { ModalComponent } from '@/components';
import { AddMatrizCS, EditMatrizCS } from '@/pages/MatrizCS/components';

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
                return <AddMatrizCS {...extraProps} />;
            case 'edit':
                return <EditMatrizCS {...extraProps} />;
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
                    'Registrar Cambio Significativo' :
                    'Editar Cambio Significativo'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}