import { useState } from 'react';
import type { Store } from './types';
import Alert from './components/UI/Alert/Alert';
import Spinner from './components/UI/Spinner/Spinner';
import StoreCard from './components/StoreCard/StoreCard';
import { useFetchStoreData } from './hooks/useFetchStoreData';
import AddNewStoreCard from './components/AddNewStoreCard/AddNewStoreCard';
import { INITIAL_STORE } from './constants';
import { usePostStore } from './hooks/usePostStore';
import { useDeleteStore } from './hooks/useDeleteStore';
import './App.css'
import EditStoreModal from './components/EditStoreModal';
import { usePatchStore } from './hooks/usePatchStore';

function App() {
  const [storeToEdit, setStoreToEdit] = useState<Store>(INITIAL_STORE);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { data, isLoading, error } = useFetchStoreData();
  const { postStore, isLoading: isSaving, error: saveError } = usePostStore();
  const { patchStore, isLoading: isPatching, error: patchError } = usePatchStore();
  const { deleteStore, isLoading: isDeleting, error: deleteError } = useDeleteStore();

  const handleClearNewStore = () => {
    setStoreToEdit(INITIAL_STORE);
    setShowModal(false);
  }

  const handleOpenStore = (store: Store) => {
    setStoreToEdit(store)
    setShowModal(true);
  }

  const handleCreateStore = async (store: Store) => {
    console.log('Ádding', store)
    await postStore(store);
    handleClearNewStore();
  }

  const handleUpdateStore = async (store: Store) => {
    await patchStore(store);
    handleClearNewStore();
  }

  return (
    <main>
      <h1>Stores</h1>
      {(isLoading || isSaving || isDeleting || isPatching) && <Spinner />}
      {(error || saveError || deleteError || patchError) && (
        <Alert message={error || saveError || deleteError || patchError} />
      )}
      {!isLoading && !isSaving && !isDeleting && !isPatching && data && (
        <div className="grid">
          <AddNewStoreCard onClick={() => setShowModal(true)}>
            <span>➕</span>
            <span>Add store</span>
          </AddNewStoreCard>
          {data.map((store, indx)=> (
            <StoreCard store={store} key={indx} onDelete={() => deleteStore(store.id)} onEdit={handleOpenStore}/>
          ))}
          <EditStoreModal
            open={showModal}
            onClose={() => setShowModal(false)}
            store={storeToEdit}
            onCreate={handleCreateStore}
            onEdit={handleUpdateStore}
          />
        </div>
      )}
      

    </main>
  )
}

export default App;
