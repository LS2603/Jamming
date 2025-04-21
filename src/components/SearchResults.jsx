import TrackList from './TrackList';

export default function SearchResults({ tracks, onAdd }) {
  return (
  <div>
   <TrackList tracks={tracks} onAdd={onAdd}/>
  </div>
  );
}
