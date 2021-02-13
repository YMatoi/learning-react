import React, { useState } from 'react';
import ReactModal from 'react-modal'
import Counter from './Counter'

type ModalProps = {
    isOpen: boolean;
    text: string;
    count: number;
}

const Modal = (props: ModalProps) => {
    const [isOpen, setIsOpen] = useState(props.isOpen)

    function showModal() { setIsOpen(true) }
    function hideModal() { setIsOpen(false) }

    const [count, setCount] = useState(props.count)

    function increment() { setCount(count + 1) }
    function decrement() { setCount(count - 1) }

    return (
        <div>
            <button onClick={showModal}>Show Modal {props.text}</button>
            <ReactModal isOpen={isOpen}>
                <button onClick={hideModal}>Hide Modal {props.text}</button>
                <Counter count={count} increment={increment} decrement={decrement} />
            </ReactModal>
        </div>
    );
}

export default Modal;