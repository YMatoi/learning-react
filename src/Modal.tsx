import React, { useState } from 'react';
import ReactModal from 'react-modal'

type ModalProps = {
    isOpen: boolean;
    text: string;
}

const Modal = (props: ModalProps) => {
    const [isOpen, setIsOpen] = useState(props.isOpen)

    function showModal() { setIsOpen(true) }
    function hideModal() { setIsOpen(false) }

    return (
        <div>
            <button onClick={showModal}>Show Modal {props.text}</button>
            <ReactModal isOpen={isOpen}>
                <button onClick={hideModal}>Hide Modal {props.text}</button>
            </ReactModal>
        </div>
    );
}

export default Modal;