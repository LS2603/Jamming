import style from './Track.module.css'

export default function Track({ track }) {
  return (
    <div className={styles.trackCard}>
      <img 
        className={style.albumArt}
        src={track.album.images[2].url}
        alt={`${track.name} album art`}
      />
      <p>{track.name} by {track.artist}</p>
    </div>
  );
}

  