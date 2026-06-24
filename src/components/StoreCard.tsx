import type { ComponentPropsWithoutRef } from "react";
import './Card.css';
import type { Store } from "../types";
import Badge from "./Badge";
import SecretText from "./SecretText";

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
        </div>
    )
}

export default Card;