import { useCallback, useState } from "react"
import { removeStore } from "../mocks/MockStore";

export const useDeleteStore = (id: number) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const deleteStore = useCallback((id: number) => {
        setIsLoading(true);
        setError('');

        return new Promise<void>((resolve, reject) => {
            const waitTime = Math.random() * 800;
            const errorProbability = 0.1;

            setTimeout(() => {
                setIsLoading(false);
                if (Math.random() < errorProbability) {
                    setError('Something went wrong');
                    reject(error);
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