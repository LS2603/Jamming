import { useEffect } from 'react';
import { search } from './Spotify';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import styles from './App.module.css';

function App() {
  useEffect(() => {
    // Trigger token grab silently on load
    try {
      search(''); // Will not run a real search but will trigger getAccessToken
    } catch (e) {
      // If we threw an error to pause redirect, log it
      console.log(e.message);
    }
  }, []);
  
    const handleSearch = async (term) => {
    const results = await search(term);
    console.log('Spotify search results:', results);
  };

  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar onSearch={handleSearch}/>
      <div className={styles.layout}>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;

