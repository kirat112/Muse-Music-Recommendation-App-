import axios from "axios";
import { useEffect, useState } from "react";

const ArtistsNavbar = () => {
  const [topShortArtists, setTopShortArtists] = useState([]);
  const [topMediumArtists, setTopMediumArtists] = useState([]);
  const [topLongArtists, setTopLongArtists] = useState([]);

  const fetchUserTopArtists = async (timeRange = "medium_term") => {
    try {
      const token = localStorage.getItem("spotify_access_token");

      const response = await axios.get(
        "https://api.spotify.com/v1/me/top/artists",
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

      console.log(response);
      if (timeRange === "short_term") {
        setTopShortArtists(response.data.items);
      } else if (timeRange === "medium_term") {
        setTopMediumArtists(response.data.items);
      } else if (timeRange === "long_term") {
        setTopLongArtists(response.data.items);
      }
    } catch (error) {
      console.log("Error fetching user top artists: ", error);
    }
  };

  const displayArtists = (artists) => {
    return (
      <div className="flex flex-col gap-5">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="flex items-center gap-4 p-1.5 bg-white rounded-md shadow-md"
          >
            <img
              src={artist.images[0]?.url || "https://via.placeholder.com/150"}
              alt={artist.name}
              className="w-20 h-20 object-cover rounded-md"
            />
            <p className="font-bold text-lg">{artist.name}</p>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetchUserTopArtists("short_term");
    fetchUserTopArtists("medium_term");
    fetchUserTopArtists("long_term");
  }, []);

  return (
    <div className="px-40 py-5">
      <div className="grid grid-cols-3 gap-10">
        {/* Short term artists */}
        <div className="bg-[#F0F5F2] p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Most played over the last 4 weeks
          </h1>
          {displayArtists(topShortArtists)}
        </div>

        {/* Medium term artists */}
        <div className="bg-[#F0F5F2] p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Most played over the last 6 months
          </h1>
          {displayArtists(topMediumArtists)}
        </div>

        {/* Long term artists */}
        <div className="bg-[#F0F5F2] p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl mb-4 text-center text-gray-800">
            Most played of all time
          </h1>
          {displayArtists(topLongArtists)}
        </div>
      </div>
    </div>
  );
};

export default ArtistsNavbar;
