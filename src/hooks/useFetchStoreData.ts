import { useState } from "react"
import type { Store } from "../types";

export const useFetchStoreData = () => {
    const [data, setData] = useState<Store[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    // TODO


    return { data, isLoading, error};
}