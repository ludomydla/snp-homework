import { useCallback, useState } from "react"
import type { Store } from "../types";
import { addStore } from "../mocks/MockStore";

export const usePostStore = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const postStore = useCallback((newStore: Store) => {
        setError('');

        return new Promise<void>((resolve, reject) => {
            const waitTime = Math.random() * 800;
            const errorProbability = 0.1;
            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
                if (Math.random() < errorProbability) {
                    setError('Something went wrong when creating new store');
                    reject(error);
                } else {
                    addStore(newStore);
                    setError('');
                    resolve();
                }
            }, waitTime);
        });
    }, []);

    return { postStore, isLoading, error };
}
