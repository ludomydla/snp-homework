import type { ComponentPropsWithoutRef } from "react";
import './AddNewStoreCard.css';

function AddNewStoreCard({children, ...rest}: ComponentPropsWithoutRef<"button">) {

    return (
        <button className="addNewStoreCard" {...rest}>
            {children}
        </button>
    )
}

export default AddNewStoreCard;