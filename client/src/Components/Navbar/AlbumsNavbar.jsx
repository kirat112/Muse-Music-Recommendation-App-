import axios from "axios";
import { useEffect, useState } from "react";

const AlbumsNavbar = () => {
  const [likedAlbums, setLikedAlbums] = useState([]);

  const fetchLikedAlbums = async () => {
    try {
      const token = localStorage.getItem("spotify_access_token");

      const response = await axios.get("https://api.spotify.com/v1/me/albums", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          limit: 10,
        },
      });

      const albums = response.data.items.map((item) => ({
        id: item.album.id,
        name: item.album.name,
        artist: item.album.artists.map((artist) => artist.name).join(", "),
        image: item.album.images[0]?.url,
        releaseDate: item.album.release_date,
      }));

      setLikedAlbums(albums);
    } catch (error) {
      console.error("Error fetching liked albums:", error);
    }
  };

  useEffect(() => {
    fetchLikedAlbums();
  }, []);

  return (
    <div className="px-20 py-10">
      <h1 className="text-2xl font-bold mb-6">Liked Albums</h1>
      <div className="grid grid-cols-4 gap-10">
        {likedAlbums.map((album) => (
          <div
            key={album.id}
            className="bg-[#F0F5F2] p-2 rounded-lg shadow-lg flex flex-col items-center"
          >
            <img
              src={album.image}
              alt={album.name}
              className="w-40 h-40 object-cover rounded-md"
            />
            <h2 className="font-bold text-lg mt-4 text-center">{album.name}</h2>
            <p className="text-gray-600 text-center">{album.artist}</p>
            <p className="text-sm text-gray-500 mt-2">
              Released: {album.releaseDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumsNavbar;
