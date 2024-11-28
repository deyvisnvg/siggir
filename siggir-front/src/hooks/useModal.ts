import { useState } from "react";

export function useModal() {
    const [openModal, setOpenModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [extraProps, setExtraProps] = useState({});

    const handleOpenModal = (type: string, props = {}) => {
        setModalType(type);
        setExtraProps({ ...props, setOpenModal });
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setExtraProps({});
    };

    return {
        openModal,
        modalType,
        extraProps,
        handleOpenModal,
        handleCloseModal,
    }
}