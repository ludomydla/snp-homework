import './App.css'
import { useState } from 'react';
import type { Store } from './types';
import Alert from './components/Alert';
import Spinner from './components/Spinner';
import StoreCard from './components/StoreCard';
import { useFetchStoreData } from './hooks/useFetchStoreData';
import AddNewStoreCard from './components/AddNewStoreCard';
import Modal from './components/Modal';


const MODAL_ID = 'ADD_NEW_STORE';

function App() {
  const [newStore, setNewStore] = useState<Store>();
  const { data, isLoading, error } = useFetchStoreData();

  return (
    <main>
      <h1>Stores</h1>
      {isLoading && <Spinner />}
      {error && (
        <Alert message={error} />
      )}
      {!isLoading && data && (
        <div className="grid">
          <AddNewStoreCard popoverTarget={MODAL_ID}>
            <span>➕</span>
            <span>Add store</span>
          </AddNewStoreCard>
          {data.map((store, indx)=> (
            <StoreCard store={store} key={indx}/>
          ))}
          <Modal title={'Add new store'} id={MODAL_ID}>
            Hello
          </Modal>
        </div>
      )}
      

    </main>
  )
}

export default App
