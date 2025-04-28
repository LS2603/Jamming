import Track from "./Track"
import styles from './Playlist.module.css'

export default function Playlist({ playlist, onRemove, playlistName, setPlaylistName, onSave }) {
    function handleSave(){
        onSave();
    };
    return (
    <div className={styles.playlist}>
       <h2 className={styles.playlistTitle}>{playlistName || 'Your Playlist'}</h2>
       <input
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="Enter playlist name"
        />
        <button onClick={handleSave} className={styles.saveButton}>Save to Spotify</button>
       {playlist.length === 0 ? (
        <p>Empty</p>
       ) : (
        playlist.map((track) => (
            <Track key={track.id} track={track} onRemove={onRemove} />
        ))
       )}
    </div>
    );
}