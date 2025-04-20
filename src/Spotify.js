let accessToken;

const clientId = '0abcc75067ff4cf49b20504fabd53de5';
const redirectUri = 'https://nimble-bunny-8cebd0.netlify.app/callback'; // Must match your Spotify app settings
const scope = 'playlist-modify-public';

// Step 1: Get access token or redirect to Spotify
function getAccessToken() {
  if (accessToken) {
    return accessToken;
  }

  // Check if token is in the URL from Spotify redirect
  const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
  if (tokenMatch) {
    accessToken = tokenMatch[1];
    console.log('✅ Token received:', accessToken);
    return accessToken;
  }

  // If no token, redirect user to Spotify login
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectUri}`;
  console.log('🔁 Redirecting to Spotify auth:', authUrl);
  window.location = authUrl;
}

// Step 2: Use token to search Spotify
async function search(term) {
  const token = getAccessToken();

  const url = `https://api.spotify.com/v1/search?type=track&q=${term}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  console.log('🔍 Raw Spotify response:', data);

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
