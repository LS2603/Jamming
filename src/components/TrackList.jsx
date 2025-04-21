import Track from './Track';

export default function TrackList({ tracks, onAdd }) {
    return (
    <div>
      {tracks.map((track) => (
        <Track key={track.id} track={track} onAdd={onAdd}/>
      ))}
    </div>);
  }
  