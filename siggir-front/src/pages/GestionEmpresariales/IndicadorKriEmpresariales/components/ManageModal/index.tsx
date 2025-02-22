import { ModalComponent } from '@/components';
import { IndicadorKriEmpAdd, IndicadorKriEmpEdit } from '../../components';

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
                return <IndicadorKriEmpAdd {...extraProps} />;
            case 'edit':
                return <IndicadorKriEmpEdit {...extraProps} />;
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
                    'Registrar Indicador Kri' :
                    'Editar Indicador Kri'
            }
        >
            {renderModalContent()}
        </ModalComponent>
    );
}