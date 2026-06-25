import type { Store } from "../types";
import { stores } from "./stores";

let privateStore = stores;

export const getStore = () => {
    return privateStore;
}

export const addStore = (newStore: Store) => {
    privateStore.push(newStore);
}

export const removeStore = (id: number) => {
    const indx = privateStore.findIndex((store) => {store.id === id})
    privateStore.splice(indx, 1);
}