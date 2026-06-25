import { useCallback, useState } from "react"
import type { Store } from "../types";
import { updateStore } from "../mocks/MockStore";
import { ERROR_PROBABILITY, MAX_DELAY } from "../constants";

export const usePatchStore = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const patchStore = useCallback((newStore: Store) => {
        setError('');

        return new Promise<void>((resolve, reject) => {
            const waitTime = Math.random() * MAX_DELAY;
            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
                if (Math.random() < ERROR_PROBABILITY) {
                    setError('Something went wrong when updating store');
                    reject(error);
                } else {
                    updateStore(newStore);
                    setError('');
                    resolve();
                }
            }, waitTime);
        });
    }, []);

    return { patchStore, isLoading, error };
}
