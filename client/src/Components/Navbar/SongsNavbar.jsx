import axios from "axios";
import { useEffect, useState } from "react";

const SongsNavbar = () => {
  const [topShortSongs, setTopShortSongs] = useState([]);
  const [topMediumSongs, setTopMediumSongs] = useState([]);
  const [topLongSongs, setTopLongSongs] = useState([]);

  const fetchUserTopSongs = async (timeRange = "medium_term") => {
    try {
      const token = localStorage.getItem("spotify_access_token");

      const response = await axios.get(
        "https://api.spotify.com/v1/me/top/tracks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            limit: 10,
            time_range: timeRange,
            offset: 0,
          },
        }
      );

      if (timeRange === "short_term") {
        setTopShortSongs(response.data.items);
      } else if (timeRange === "medium_term") {
        setTopMediumSongs(response.data.items);
      } else if (timeRange === "long_term") {
        setTopLongSongs(response.data.items);
      }
    } catch (error) {
      console.log("Error fetching user top songs: ", error);
    }
  };

  const displaySongs = (songs) => {
    return (
      <div className="flex flex-col gap-5">
        {songs.map((song) => (
          <div
            key={song.id}
            className="flex items-center gap-4 p-1.5 bg-white rounded-md shadow-md"
          >
            <img
              src={song.album.images[0]?.url || "https://via.placeholder.com/150"}
              alt={song.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <div>
              <p className="font-bold text-lg">{song.name}</p>
              <p className="text-sm text-gray-600">
                {song.artists.map((artist) => artist.name).join(", ")}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetchUserTopSongs("short_term");
    fetchUserTopSongs("medium_term");
    fetchUserTopSongs("long_term");
  }, []);

  return (
    <div className="px-20 py-10">
      <div className="grid grid-cols-3 gap-10">
        {/* Short term songs */}
        <div className="bg-[#F0F5F2] p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Most played over the last 4 weeks
          </h1>
          {displaySongs(topShortSongs)}
        </div>
        {/* Medium term songs */}
        <div className="bg-[#F0F5F2] p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Most played over the last 6 months
          </h1>
          {displaySongs(topMediumSongs)}
        </div>
        {/* Long term songs */}
        <div className="bg-[#F0F5F2] p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Most played of all time
          </h1>
          {displaySongs(topLongSongs)}
        </div>
      </div>
    </div>
  );
};

export default SongsNavbar;
