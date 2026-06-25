import { useEffect, useState } from "react";
import { STORE_TYPE_OPTIONS } from "../constants";
import type { Store } from "../types";
import Button from "./UI/Button/Button";
import Input from "./UI/Input/Input";
import Modal from "./UI/Modal/Modal";
import Select from "./UI/Select/Select";

type EditStoreModalProps = {
    open: boolean;
    store: Store;
    onClose: () => void;
    onCreate: (store: Store) => void;
    onEdit: (store: Store) => void;
}

function EditStoreModal({open, store, onClose, onCreate, onEdit}: EditStoreModalProps) {

    const [actualStore, setActualStore] = useState<Store>(store);
    const isCreate = store.id === 0; // initial store is without ID => create

    // keep local form state in sync with whichever store was opened
    useEffect(() => {
        setActualStore(store);
    }, [store]);

    const handleSubmit = (ev: React.SubmitEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if(isCreate) {
            onCreate(actualStore)
        } else {
            onEdit(actualStore);
        } 
    }

    return(
        <Modal title={'Add new store'} open={open} onClose={onClose}>
            <form onSubmit={handleSubmit}>
                <Input
                label="Name"
                value={actualStore.name}
                required
                onChange={(value) => {setActualStore(old => ({...old, name: value}))}}
                />
                <Input 
                label="Fields description"
                value={actualStore.description}
                required
                onChange={(value) => {setActualStore(old => ({...old, description: value}))}}
                />
                <Select
                label="Store type"
                value={actualStore.type}
                required
                options={STORE_TYPE_OPTIONS.map(option => ({value: option, label: option}))}
                onChange={(value) => {setActualStore(old => ({...old, type: value}))}}
                />
                <Input
                label="URL"
                value={actualStore.url}
                type="url"
                required
                onChange={(value) => {setActualStore(old => ({...old, url: value}))}}
                />
                <Input
                label="Secret key"
                value={actualStore.secretKey}
                type="password"
                required
                onChange={(value) => {setActualStore(old => ({...old, secretKey: value}))}}
                />
                <Button variant="success" type="submit">
                    Save
                </Button>
                <Button
                    variant="danger"
                    type="button"
                    onClick={onClose}
                >
                    Cancel
                </Button>
            </form>
        </Modal>
    )
}

export default EditStoreModal;