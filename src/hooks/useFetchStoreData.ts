import { useEffect, useState } from "react"
import type { Store } from "../types";
import { getStore } from "../mocks/MockStore";
import { ERROR_PROBABILITY, MAX_DELAY } from "../constants";

export const useFetchStoreData = () => {
    const [data, setData] = useState<Store[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect( () => {
        const waitTime = Math.random() * MAX_DELAY;

        const timer = setTimeout(() => {
            if(Math.random() < ERROR_PROBABILITY) {
                setError('Something went wrong when fetching stores');
                setData(null);
            } else {
                setData(getStore());
                setError('')
            }
            setIsLoading(false);
        }, waitTime);

        return () => {
            clearTimeout(timer);
        }

    }, [])

    return { data, isLoading, error};
}