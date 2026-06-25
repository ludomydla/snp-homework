import type { ComponentPropsWithoutRef } from "react";
import type { Store } from "../../types";
import Badge from "../UI/Badge/Badge";
import SecretText from "../SecretText";
import Button from "../UI/Button/Button";
import './StoreCard.css';

type CardProps = ComponentPropsWithoutRef<"div"> & {
    store: Store;
}

function Card({store}: CardProps) {


    return (
        <div className="storeCard">
            <h3>{store.name}</h3>
            <p>{store.description}</p>
            <Badge content={store.type} />
            <p>{store.url}</p>
            <SecretText text={store.secretKey} />
            <div className="storeCard_footer">
                <Button variant="secondary">Edit</Button>
                <Button variant="danger">Delete</Button>
            </div>
        </div>
    )
}

export default Card;