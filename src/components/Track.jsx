import styles from './Track.module.css'

export default function Track({ track }) {
  return (
    <div className={styles.trackCard}>
      <img 
        className={styles.albumArt}
        src={track.album?.images?.[0]?.url}
        alt={`${track.name} album art`}
      />
      <p>{track.name} by {track.artist}</p>
      <p className={styles.albumName}>{track.album.name}</p>
    </div>
  );
}

  