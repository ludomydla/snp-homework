import './App.css'
import { useState } from 'react';
import type { Store } from './types';
import Card from './components/Card';
import Alert from './components/Alert';
import Spinner from './components/Spinner';
import StoreCard from './components/StoreCard';
import { useFetchStoreData } from './hooks/useFetchStoreData';

function App() {
  const [newStore, setNewStore] = useState<Store>();
  const { data, isLoading, error } = useFetchStoreData();

  const handleAddStore = () => {
    // open modal
  }

  return (
    <main>
      {isLoading && <Spinner />}
      {error && (
        <Alert message={error} />
      )}
      {!isLoading && data && (
        <div className="grid">
          <Card onClick={handleAddStore}>
            <span>➕</span>
            <span>Add store</span>
          </Card>
          {data.map(store => (
            <StoreCard store={store} />
          ))}
        </div>
      )}
      

    </main>
  )
}

export default App
