import type { STORE_TYPE_OPTIONS } from "./constants";

export type StoreType = typeof STORE_TYPE_OPTIONS[number];

export type Store = {
    id: number;
    name: string;
    description: string;
    type: StoreType;
    url: string;
    secretKey: string;
}