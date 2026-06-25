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
    const indx = privateStore.findIndex((store) => store.id === id)
    if (indx !== -1) privateStore.splice(indx, 1);
}

export const updateStore = (updatedStore: Store) => {
    const indx = privateStore.findIndex((store) => store.id === updatedStore.id)
    if (indx !== -1) privateStore.splice(indx, 1, updatedStore)
}