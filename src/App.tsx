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
import './App.css'
import Select from './components/UI/Select/Select';


const MODAL_ID = 'ADD_NEW_STORE';

function App() {
  const [newStore, setNewStore] = useState<Partial<Store>>(INITIAL_STORE);
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
            <form>
              <Input
                label="Name"
                onChange={(value) => {setNewStore(old => ({...old, name: value}))}}
              />
              <Input 
                label="Fields description" 
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
                onChange={(value) => {setNewStore(old => ({...old, url: value}))}}
              />
              <Input
                label="Secret key"
                type="password"
                onChange={(value) => {setNewStore(old => ({...old, secretKey: value}))}}
              />
              <Button variant="success">Save</Button>
              <Button variant="danger">Cancel</Button>
            </form>
          </Modal>
        </div>
      )}
      

    </main>
  )
}

export default App;
