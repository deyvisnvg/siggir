'use client'

import {
    Modal,
    ModalAction,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalHeader,
    ModalTitle,
} from 'keep-react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    formModal?: ReactNode;
    titleModal: string;
}

const ModalComponent = ({ children, formModal, titleModal }: Props) => {
    return (
        <Modal>
            <ModalAction asChild>
                {children}
            </ModalAction>
            <ModalContent className="w-[29rem] lg:w-[26rem]">
                <ModalClose className="absolute right-4 top-4" />
                <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
                    <div className="space-y-1">
                        <ModalTitle className='text-center p-2 text-heading-6 text-gray-700'>{titleModal}</ModalTitle>
                        <ModalDescription>
                            {formModal}
                        </ModalDescription>
                    </div>
                </ModalHeader>
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent;