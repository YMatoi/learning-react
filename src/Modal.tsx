import React, { useState } from 'react';
import ReactModal from 'react-modal'
import Counter from './Counter'

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
                <Counter count={0} />
            </ReactModal>
        </div>
    );
}

export default Modal;