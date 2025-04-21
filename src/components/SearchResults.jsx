import Track from './Track';
import TrackList from './TrackList';

export default function SearchResults({ tracks }) {
  return (
  <div>
   <TrackList tracks={tracks}/>
  </div>
  );
}
