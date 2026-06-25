import { useCallback, useState } from "react"
import { removeStore } from "../mocks/MockStore";

export const useDeleteStore = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const deleteStore = useCallback((id: number) => {
        console.log('useDeleteStore', id)
        setError('');

        return new Promise<void>((resolve, reject) => {
            const waitTime = Math.random() * 800;
            const errorProbability = 0.1;
            setIsLoading(true);
            console.log('deleting the store', id)

            setTimeout(() => {
                setIsLoading(false);
                if (Math.random() < errorProbability) {
                    setError('Something went wrong when deleting');
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