import type { ComponentPropsWithoutRef } from "react";
import './Card.css';

type CardProps = ComponentPropsWithoutRef<"div"> & {
    onClick: () => void;
}

function Card({children, onClick}: CardProps) {


    return (
        <div className="card" onClick={onClick}>
            {children}
        </div>
    )
}

export default Card;