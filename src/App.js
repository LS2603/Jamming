import { useState } from 'react'
import { search } from './Spotify';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import styles from './App.module.css';

function App() { 
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [playlistTracks, setPlaylistTracks] = useState ([]);
    const [playlistName, setPlaylistName] = useState("New Playlist");

    const handleSearch = async (term) => {
      const results = await search(term);
      setSearchResults(results);
      setSearchTerm(term);
    };
    function addTrack(track) {
      const alreadyThere = playlistTracks.some(savedTrack => savedTrack.id === track.id);
    
      if (!alreadyThere) {
        setPlaylistTracks([...playlistTracks, track]);
    }
    };

    function removeTrack(track) {
      const updatedPlaylist = playlistTracks.filter(
        savedTrack => savedTrack.id !== track.id
      );
      setPlaylistTracks(updatedPlaylist);
    };    

    function savePlaylist() {
      window.alert("Saving playlist:", playlistName, playlistTracks)
    };

  return (
    <div className={styles.App}>
      <h1>Jamming</h1>
      <SearchBar onSearch={handleSearch}/>
      {searchTerm && <p className={styles.searchTerm}>Showing results for: {searchTerm}</p>}
      <div className={styles.layout}>
        <SearchResults tracks={searchResults} onAdd={addTrack}/>
        <Playlist 
          playlist={playlistTracks} 
          onRemove={removeTrack} 
          playlistName={playlistName} 
          setPlaylistName={setPlaylistName} 
          onSave={savePlaylist}/>
      </div>
    </div>
  );
}

export default App;

