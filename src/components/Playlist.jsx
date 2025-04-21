import Track from "./Track"

export default function Playlist({ playlist, onRemove }) {
    return (
    <div>
       <h2>Your Playlist</h2>
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