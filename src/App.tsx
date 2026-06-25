import './App.css'
import { useState } from 'react';
import type { Store } from './types';
import Alert from './components/UI/Alert/Alert';
import Spinner from './components/UI/Spinner/Spinner';
import StoreCard from './components/StoreCard/StoreCard';
import { useFetchStoreData } from './hooks/useFetchStoreData';
import AddNewStoreCard from './components/AddNewStoreCard/AddNewStoreCard';
import Modal from './components/UI/Modal/Modal';


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
            
          </Modal>
        </div>
      )}
      

    </main>
  )
}

export default App
