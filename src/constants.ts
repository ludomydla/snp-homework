import type { Store } from "./types";

export const STORE_TYPE_OPTIONS = ["google-storage", "aws-s3", "adls"];

export const INITIAL_STORE: Store = {
    id: 0,
    name: '',
    description: '',
    type: '',
    url: '',
    secretKey: '',
}