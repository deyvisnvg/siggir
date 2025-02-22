import { ModalComponent } from '@/components';
import { PeriodoAdd, PeriodoEdit } from '@/pages/MantenedorPeriodo/components';

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
                return <PeriodoAdd {...extraProps} />;
            case 'edit':
                return <PeriodoEdit {...extraProps} />;
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
                    ? 'Registrar Periodo - Anio'
                    : 'Editar Periodo - Anio'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}