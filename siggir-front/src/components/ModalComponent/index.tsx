import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    titleModal: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function ModalComponents({ children, titleModal, isOpen, onClose }: Props) {
    return (
        <>
            <Dialog
                open={isOpen}
                onClose={onClose}
                as="div"
                className="relative z-10 focus:outline-none"
            >
                <DialogBackdrop className="fixed inset-0 bg-black/30" />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-max rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-center p-2 text-heading-6 text-gray-700">
                                {titleModal}
                            </DialogTitle>
                            <div className='px-1.5'>
                                {children}
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}