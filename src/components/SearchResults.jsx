import Track from './Track';

export default function SearchResults({ tracks }) {
  return (
  <div>
      {tracks.map((track) => (
  <Track key={track.id} track={track} />
))}
  </div>
  );
}
