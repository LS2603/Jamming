import TrackList from './TrackList';
import styles from './SearchResults.module.css';

export default function SearchResults({ tracks, onAdd }) {
  return (
  <div className={styles.searchResults}>
    <h2 className={styles.searchTitle}>Search Results</h2>
   <TrackList tracks={tracks} onAdd={onAdd}/>
  </div>
  );
}
