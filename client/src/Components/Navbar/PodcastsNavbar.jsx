import axios from "axios";
import { useEffect, useState } from "react";

const PodcastsNavbar = () => {
  const [podcasts, setPodcasts] = useState([]);

  const fetchTopPodcasts = async () => {
    try {
      const token = localStorage.getItem("spotify_access_token");

      const response = await axios.get(
        "https://api.spotify.com/v1/browse/categories/podcasts/playlists",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            limit: 10, 
          },
        }
      );

      const podcastPlaylists = response.data.playlists.items.map((playlist) => ({
        id: playlist.id,
        name: playlist.name,
        description: playlist.description,
        image: playlist.images[0]?.url,
        url: playlist.external_urls.spotify,
      }));

      setPodcasts(podcastPlaylists);
    } catch (error) {
      console.error("Error fetching top podcasts:", error);
    }
  };

  useEffect(() => {
    fetchTopPodcasts();
  }, []);

  return (
    <div className="px-20 py-10">
      <h1 className="text-2xl font-bold mb-6">Top Podcasts</h1>
      <div className="grid grid-cols-3 gap-10">
        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-[#F0F5F2] p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={podcast.image}
              alt={podcast.name}
              className="w-40 h-40 object-cover rounded-md"
            />
            <h2 className="font-bold text-lg mt-4 text-center">{podcast.name}</h2>
            <p className="text-gray-600 text-center mt-2">{podcast.description}</p>
            <a
              href={podcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 mt-4"
            >
              Listen on Spotify
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PodcastsNavbar;
