import { ModalComponent } from '@/components';
import { RiesgosEmpAdd, RiesgosEmpEdit } from '../../components';

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
                return <RiesgosEmpAdd {...extraProps} />;
            case 'edit':
                return <RiesgosEmpEdit {...extraProps} />;
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
                    'Registrar Riesgo' :
                    'Editar Riesgo'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}