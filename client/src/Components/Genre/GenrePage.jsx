import axios from "axios";
import { useEffect, useState } from "react";

const options = [
  "Pop",
  "Hip-Hop/Rap",
  "Rock",
  "EDM (Electronic Dance Music)",
  "R&B/Soul",
  "Indie/Alternative",
  "Country",
  "Reggae/Dancehall",
  "Latin (e.g., Reggaeton, Salsa, Bachata)",
  "K-Pop (Korean Pop)",
  "Afrobeats",
  "Bollywood",
  "Hindustani Classical",
  "Carnatic Classical",
  "Bhangra",
  "Indi-Pop",
  "Ghazal",
  "Qawwali",
  "Sufi",
  "Devotional (Bhajans and Kirtans)",
  "Tollywood (Telugu Film Music)",
  "Kollywood (Tamil Film Music)",
  "Punjabi Folk",
  "Garba/Dandiya",
  "Arabic Music",
  "J-Pop (Japanese Pop)",
  "Lo-Fi Beats",
  "Classical",
  "Jazz",
  "Blues",
  "Metal",
  "Punk",
  "Folk/Acoustic",
  "Chill/Relaxation Music",
  "Synthwave",
  "Hyperpop",
  "Ambient",
  "Trap",
  "Drum and Bass",
  "House/Deep House",
  "Dubstep",
  "Gospel",
  "Chanting/Devotional Music",
  "World Music",
];

const GenrePage = () => {
  const [genre, setGenre] = useState("");
  const [recommendations, setRecommendations] = useState([]);

  const handleSelectedGenre = (event) => {
    setGenre(event.target.value);
    if (recommendations.length > 0) {
      setRecommendations([]);
    }
  };

  const handleRecommendations = async () => {
    const token = localStorage.getItem("spotify_access_token");
    try {
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: `genre:${genre}`,
          type: "track",
          limit: 20,
          market: "IN",
        },
      });
      setRecommendations((prev) => [...prev, ...response.data.tracks.items]);
      console.log("Tracks:", response.data.tracks.items);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
    setGenre("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-40 py-5 flex flex-col">
      {/* Heading */}
      <div className="p-4 flex flex-col justify-start gap-5">
        <h1 className="font-bold text-4xl">What Genre are you in?</h1>
        <p className="font-normal text-sm text-[#638778]">
          We&apos;ll use these to personalize your recommendations.
        </p>
      </div>

      {/* Options */}
      <ul onClick={handleSelectedGenre} className="p-4 flex flex-col gap-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="p-[15px] border border-[#DBE5E0] rounded-xl flex gap-4"
          >
            <input
              className="cursor-pointer"
              type="radio"
              name={option}
              id={option}
              value={option}
              checked={genre === option}
            />
            <label className="cursor-pointer" htmlFor={option}>
              {option}
            </label>
          </div>
        ))}
      </ul>

      {/* button */}
      <div className="p-3 w-full flex justify-end">
        <button
          onClick={handleRecommendations}
          className="px-5 py-2.5 rounded-2xl bg-buttonBgGreen text-buttonTextColor "
        >
          Next
        </button>
      </div>
      {/* Recommendations */}
      <div>
        {recommendations.length > 0 && (
          <div className="p-4">
            <h1 className="font-bold text-4xl mb-6">Recommendations</h1>
            <div className="grid grid-cols-5 gap-5">
              {recommendations.map((track, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <img
                    src={track.album.images[0].url}
                    alt={track.album.name}
                    className="w-40 h-40 rounded-lg"
                  />
                  <p className="font-bold text-lg">{track.name}</p>
                  <p className="font-normal text-sm">{track.artists[0].name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenrePage;
