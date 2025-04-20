export default function SearchResults( {tracks}) {
  return (
    <div>
      {tracks.map((track) => (
        <div key={track.id}>
          <p>{track.name} by {track.artist}</p>
        </div>
      ))}
    </div>
  );
  }
  