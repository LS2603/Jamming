import styles from './Track.module.css'

export default function Track({ track, onAdd, onRemove }) {
  function handleClick() {
    if (onAdd) {
      onAdd(track);
    } else if (onRemove) {
      onRemove(track);
    }
  }

  return (
    <div className={styles.trackCard}>
      <img 
        className={styles.albumArt}
        src={track.album?.images?.[0]?.url}
        alt={`${track.name} album art`}
      />
      <p>{track.name} by {track.artist}</p>
      <p className={styles.albumName}>{track.album.name}</p>
      <button onClick={handleClick}>
        {onAdd ? "Add to Playlist" : "Remove from Playlist"}
      </button>
    </div>
  );
}

  