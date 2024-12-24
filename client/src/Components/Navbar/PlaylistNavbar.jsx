import { useEffect, useState } from "react";
import axios from "axios";

const PlaylistNavbar = () => {
  const [playlists, setPlaylists] = useState([]);
  const token = localStorage.getItem("spotify_access_token");

  useEffect(() => {
    if (token) {
      axios
        .get("https://api.spotify.com/v1/me/playlists?limit=20", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setPlaylists(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching playlists:", error);
        });
    } else {
      window.location.href = "/";
    }
  }, [token]);
  return (
    <div className="px-40 py-5 flex flex-col">
      <h1 className="p-4 font-bold text-4xl">Your Playlists</h1>
      <div className="flex flex-wrap">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="p-4 bg-white rounded-lg shadow-md w-64 mr-4 mb-4"
          >
            <img
              src={
                playlist.images && playlist.images[0]
                  ? playlist.images[0].url
                  : "default-image-url"
              }
              alt={playlist.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold">{playlist.name}</h2>
            <p className="text-sm text-gray-400 mt-2">
              Tracks: {playlist.tracks.total}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistNavbar;
