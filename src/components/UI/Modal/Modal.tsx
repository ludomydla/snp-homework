import type { ComponentPropsWithoutRef } from "react";
import './Modal.css';

type ModalProps = ComponentPropsWithoutRef<"dialog"> & {
    title: string;
    id: string;
}

function Modal({children, title, id}: ModalProps) {

    return (
        <dialog id={id} popover="auto" className="modal_wrapper">
            <div className="modal_header">
                <h2>{title}</h2>
                <button className="modal_close" popoverTarget={id} popoverTargetAction="hide">&times;</button>
            </div>
            {children}
        </dialog>
    )
}

export default Modal;