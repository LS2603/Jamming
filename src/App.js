import { useState } from 'react'
import { search } from './Spotify';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import styles from './App.module.css';

function App() { 
    const [searchResults, setSearchResults] = useState([]);
    const handleSearch = async (term) => {
    const results = await search(term);
    setSearchResults(results);
    console.log('Spotify search results:', results);
  };
  

  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar onSearch={handleSearch}/>
      <div className={styles.layout}>
        <SearchResults tracks={searchResults}/>
        <Playlist />
      </div>
    </div>
  );
}

export default App;

