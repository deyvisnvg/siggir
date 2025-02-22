import { ModalComponent } from '@/components';
import { PlanAccionEmpAdd, PlanAccionEmpEdit } from '../../components';

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
                return <PlanAccionEmpAdd {...extraProps} />;
            case 'edit':
                return <PlanAccionEmpEdit {...extraProps} />;
            default:
                return null;
        }
    };

    return (
        <ModalComponent
            isOpen={isOpen}
            onClose={closeModal}
            sizeModal='max-w-3xl'
            titleModal={
                modalType === 'add' ?
                    'Registrar Plan de Acción' :
                    'Editar Plan de Acción'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}