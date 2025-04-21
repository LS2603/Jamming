import { useState } from 'react'
import { search } from './Spotify';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import styles from './App.module.css';

function App() { 
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = async (term) => {
      const results = await search(term);
      setSearchResults(results);
      setSearchTerm(term);
    };
    

  return (
    <div className="App">
      <h1>Jamming</h1>
      <SearchBar onSearch={handleSearch}/>
      {searchTerm && <p className={styles.searchTerm}>Showing results for: {searchTerm}</p>}
      <div className={styles.layout}>
        <SearchResults tracks={searchResults}/>
        <Playlist />
      </div>
    </div>
  );
}

export default App;

