import type { ComponentPropsWithoutRef } from "react";
import './Modal.css';

type ModalProps = ComponentPropsWithoutRef<"dialog"> & {
    open: boolean;
    onClose: () => void;
    title: string;
}

function Modal({open, onClose, children, title}: ModalProps) {

    if(open) return (
        <dialog className="modal_wrapper" open={open}>
            <div className="modal_header">
                <h2>{title}</h2>
                <button className="modal_close" onClick={onClose}>&times;</button>
            </div>
            {children}
        </dialog>
    )
    else return null;
}

export default Modal;