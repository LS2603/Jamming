let accessToken;

async function getAccessToken() {
  if (accessToken) return accessToken;

  const clientId = '0abcc75067ff4cf49b20504fabd53de5';
  const clientSecret = 'c1c8f6b040b1473d893c77f11095a740';

  const encoded = btoa(`${clientId}:${clientSecret}`);

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Basic ${encoded}`,
    },
    body: 'grant_type=client_credentials',
  });

  const data = await response.json();
  accessToken = data.access_token;
  return accessToken;
}

async function search(term) {
  const token = await getAccessToken();

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
