import { useState } from 'react';
import type { Store } from './types';
import Alert from './components/UI/Alert/Alert';
import Spinner from './components/UI/Spinner/Spinner';
import StoreCard from './components/StoreCard/StoreCard';
import { useFetchStoreData } from './hooks/useFetchStoreData';
import AddNewStoreCard from './components/AddNewStoreCard/AddNewStoreCard';
import Modal from './components/UI/Modal/Modal';
import Button from './components/UI/Button/Button';
import { INITIAL_STORE, STORE_TYPE_OPTIONS } from './constants';
import Input from './components/UI/Input/Input';
import Select from './components/UI/Select/Select';
import { usePostStore } from './hooks/usePostStore';
import { useDeleteStore } from './hooks/useDeleteStore';
import './App.css'

function App() {
  const [newStore, setNewStore] = useState<Partial<Store>>(INITIAL_STORE);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data, isLoading, error } = useFetchStoreData();
  const { postStore, isLoading: isSaving, error: saveError } = usePostStore();
  const { deleteStore, isLoading: isDeleting, error: deleteError } = useDeleteStore();

  console.log('loadings', isLoading, isSaving, isDeleting);

  const handleClearNewStore = () => {
    setNewStore(INITIAL_STORE);
    setShowModal(false);
  }

  const handleSaveNewStore: React.FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
    try {
      await postStore(newStore as Store);
      handleClearNewStore();
    } catch {
      // error surfaced via saveError below
    }
  }

  return (
    <main>
      <h1>Stores</h1>
      {(isLoading || isSaving || isDeleting) && <Spinner />}
      {(error || saveError || deleteError) && (
        <Alert message={error} />
      )}
      {!isLoading && !isSaving && !isDeleting && data && (
        <div className="grid">
          <AddNewStoreCard onClick={() => setShowModal(true)}>
            <span>➕</span>
            <span>Add store</span>
          </AddNewStoreCard>
          {data.map((store, indx)=> (
            <StoreCard store={store} key={indx} onDelete={() => deleteStore(store.id)} />
          ))}
          <Modal title={'Add new store'} open={showModal} onClose={() => setShowModal(false)}>
            <form onSubmit={handleSaveNewStore}>
              <Input
                label="Name"
                required
                onChange={(value) => {setNewStore(old => ({...old, name: value}))}}
              />
              <Input 
                label="Fields description"
                required
                onChange={(value) => {setNewStore(old => ({...old, description: value}))}}
              />
              <Select 
                label="Store type" 
                options={STORE_TYPE_OPTIONS.map(option => ({value: option, label: option}))} 
                onChange={(value) => {setNewStore(old => ({...old, type: value}))}}
              />
              <Input
                label="URL"
                type="url"
                required
                onChange={(value) => {setNewStore(old => ({...old, url: value}))}}
              />
              <Input
                label="Secret key"
                type="password"
                required
                onChange={(value) => {setNewStore(old => ({...old, secretKey: value}))}}
              />
              {saveError && <Alert message={saveError} />}
              <Button variant="success" type="submit" disabled={isSaving}>
                {isSaving ? 'Saving…' : 'Save'}
              </Button>
              <Button
                variant="danger"
                type="button"
                onClick={handleClearNewStore}
              >
                Cancel
              </Button>
            </form>
          </Modal>
        </div>
      )}
      

    </main>
  )
}

export default App;
