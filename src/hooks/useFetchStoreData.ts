import { useEffect, useState } from "react"
import type { Store } from "../types";
import { getStore } from "../mocks/MockStore";

export const useFetchStoreData = () => {
    const [data, setData] = useState<Store[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect( () => {
        const waitTime = Math.random() * 800;
        const errorProbability = 0.1;

        const timer = setTimeout(() => {
            if(Math.random() < errorProbability) {
                setError('Something went wrong');
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