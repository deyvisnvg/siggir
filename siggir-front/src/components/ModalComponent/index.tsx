'use client'

import { Check } from 'phosphor-react'
import {
    Button,
    Modal,
    ModalAction,
    ModalClose,
    ModalContent,
    ModalDescription,
    ModalFooter,
    ModalHeader,
    ModalTitle,
} from 'keep-react'
import { ReactNode } from 'react'

interface Props {
    children: ReactNode;
    buttonModal?: ReactNode;
    titleModal: string;
}

const ModalComponent = ({ children, buttonModal, titleModal }: Props) => {
    return (
        <Modal>
            <ModalAction asChild>
                {buttonModal}
            </ModalAction>
            <ModalContent className="w-[29rem] lg:w-[26rem]">
                <ModalClose className="absolute right-4 top-4" />
                <ModalHeader className="mb-6 flex flex-col items-center justify-center space-y-3">
                    <div className="space-y-1">
                        <ModalTitle className='text-center p-2 text-heading-6 text-gray-700'>{titleModal}</ModalTitle>
                        <ModalDescription>
                            {children}
                        </ModalDescription>
                    </div>
                </ModalHeader>
                {/* <ModalFooter className="justify-center">
                    <ModalClose asChild>
                        <Button>Confirm</Button>
                    </ModalClose>
                </ModalFooter> */}
            </ModalContent>
        </Modal>
    )
}

export default ModalComponent;