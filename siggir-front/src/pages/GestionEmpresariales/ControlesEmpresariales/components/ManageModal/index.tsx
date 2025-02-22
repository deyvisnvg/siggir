import { ModalComponent } from '@/components';
import { ControlesEmpAdd, ControlesEmpEdit} from '../../components';

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
                return <ControlesEmpAdd {...extraProps} />;
            case 'edit':
                return <ControlesEmpEdit {...extraProps} />;
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
                    'Registrar Controles' :
                    'Editar Control'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}