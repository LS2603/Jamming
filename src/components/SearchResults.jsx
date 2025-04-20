import styles from './SearchResults.module.css';

export default function SearchResults({ tracks }) {
  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id} className={styles.trackCard}>
          <p>{track.name} by {track.artist}</p>
        </div>
      ))}
    </div>
  );
}
