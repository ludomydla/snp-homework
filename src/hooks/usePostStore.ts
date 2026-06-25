import { useCallback, useState } from "react"
import type { Store } from "../types";
import { addStore } from "../mocks/MockStore";
import { ERROR_PROBABILITY, MAX_DELAY } from "../constants";

export const usePostStore = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const postStore = useCallback((newStore: Store) => {
        setError('');

        return new Promise<void>((resolve, reject) => {
            const waitTime = Math.random() * MAX_DELAY;
            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
                if (Math.random() < ERROR_PROBABILITY) {
                    setError('Something went wrong when creating new store');
                    reject();
                } else {
                    addStore({...newStore, id: Math.round(Math.random() * 1e5)});
                    setError('');
                    resolve();
                }
            }, waitTime);
        });
    }, []);

    return { postStore, isLoading, error };
}
