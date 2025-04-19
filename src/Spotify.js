let accessToken;

function getAccessToken() {
  if (accessToken) return accessToken;

  const tokenMatch = window.location.href.match(/access_token=([^&]*)/);

  if (tokenMatch) {
    accessToken = tokenMatch[1];
    return accessToken;
  } else {
    const clientId = '0abcc75067ff4cf49b20504fabd53de5'; 
    const redirectUri = 'https://nimble-bunny-8cebd0.netlify.app/callback'; 
    const scope = 'playlist-modify-public';

    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectUri}`;
    window.location = authUrl;
  }
}

async function search(term) {
  const token = getAccessToken();
  const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!data.tracks) return [];

  return data.tracks.items.map((track) => ({
    id: track.id,
    name: track.name,
    artist: track.artists[0].name,
    album: track.album.name,
    uri: track.uri,
  }));
}

export { search };


  