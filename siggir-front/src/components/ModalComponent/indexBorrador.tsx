'use client'

import { Size } from '@/types/core';
import {
    Modal,
    ModalAction,
    ModalContent,
    ModalHeader,
    ModalTitle,
} from 'keep-react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    buttonModal?: ReactNode;
    titleModal: string;
    size?: Size;
}

const ModalComponent = ({ children, buttonModal, titleModal, size = "small" }: Props) => {
    const widthModal = {
        small: "w-auto",
        medium: "min-w-min",
        large: "max-w-max"
    }

    return (
        <Modal>
            <ModalAction asChild>
                {buttonModal}
            </ModalAction>
            <ModalContent className={` ${widthModal[size]}`}>
                <ModalHeader className="mb-6 flex flex-col items-center justify-center">
                    <div className="space-y-1">
                        <ModalTitle className='text-center p-2 text-heading-6 text-gray-700'>{titleModal}</ModalTitle>
                        <div className='px-1.5'>
                            {children}
                        </div>
                    </div>
                </ModalHeader>
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent;