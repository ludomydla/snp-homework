export type StoreType = "google-storage" | "aws-s3" | "adls";

export type Store = {
    name: string;
    description: string;
    type: StoreType;
    url: string;
    secretKey: string;
}