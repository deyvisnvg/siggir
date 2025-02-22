import { ModalComponent } from '@/components';
import { SubPeriodoAdd, SubPeriodoEdit } from '@/pages/MantenedorSubPeriodo/components';

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
                return <SubPeriodoAdd {...extraProps} />;
            case 'edit':
                return <SubPeriodoEdit {...extraProps} />;
            default:
                return null;
        }
    };

    return (
        <ModalComponent
            isOpen={isOpen}
            onClose={closeModal}
            titleModal={
                modalType === 'add'
                    ? 'Registrar SubPeriodo'
                    : 'Editar SubPeriodo'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}