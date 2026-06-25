import { useCallback, useState } from "react"
import { removeStore } from "../mocks/MockStore";
import { ERROR_PROBABILITY, MAX_DELAY } from "../constants";

export const useDeleteStore = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const deleteStore = useCallback((id: number) => {
        console.log('useDeleteStore', id)
        setError('');

        return new Promise<void>((resolve, reject) => {
            const waitTime = Math.random() * MAX_DELAY;

            setIsLoading(true);
            console.log('deleting the store', id)

            setTimeout(() => {
                setIsLoading(false);
                if (Math.random() < ERROR_PROBABILITY) {
                    setError('Something went wrong when deleting');
                    reject();
                } else {
                    removeStore(id)
                    setError('')
                    resolve();
                }
            }, waitTime);
        });
        }, []);

    return { deleteStore, isLoading, error};
}