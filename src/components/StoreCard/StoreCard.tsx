import type { ComponentPropsWithoutRef } from "react";
import type { Store } from "../../types";
import Badge from "../UI/Badge/Badge";
import SecretText from "../SecretText";
import Button from "../UI/Button/Button";
import './StoreCard.css';

type CardProps = ComponentPropsWithoutRef<"div"> & {
    store: Store;
    onDelete: () => void;
    onEdit: (store: Store) => void
}

function Card({store, onDelete, onEdit}: CardProps) {

    return (
        <div className="storeCard">
            <h3>{store.name}</h3>
            <p>{store.description}</p>
            <Badge content={store.type} />
            <p>{store.url}</p>
            <SecretText text={store.secretKey} />
            <div className="storeCard_footer">
                <Button variant="secondary" onClick={() => onEdit(store)}>Edit</Button>
                <Button variant="danger" onClick={onDelete}>Delete</Button>
            </div>
        </div>
    )
}

export default Card;