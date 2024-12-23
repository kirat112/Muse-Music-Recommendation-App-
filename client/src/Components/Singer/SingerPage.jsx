import axios from "axios";
import { useEffect, useState, useCallback, useRef } from "react";
// import useDebounce from "../../utils/useDebounce";

const SingerPage = () => {
  const [query, setQuery] = useState("");
  const [artists, setArtists] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [showArtists, setShowArtists] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState("");
  const [suggestedSongs, setSuggestedSongs] = useState([]);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const popularSingers = [
    { name: "The Weeknd", id: "1Xyo4u8uXC1ZmMpatF05PJ" },
    { name: "Taylor Swift", id: "06HL4z0CvFAxyc27GXpf02" },
    { name: "Bruno Mars", id: "0du5cEVh5yTK9QJze8zA0C" },
    { name: "Bad Bunny", id: "4q3ewBCX7sLwd24euuV69X" },
    { name: "Ed Sheeran", id: "6eUKZXaKkcviH0Ku9w2n3V" },
    { name: "Ariana Grande", id: "66CXWjxzNUsdJxJ2JdwvnR" },
    { name: "Eminem", id: "7dGJo4pcD2V6oG8kP0tJRR" },
    { name: "Justin Bieber", id: "1uNFoZAHBGtllmzznpCI3s" },
    { name: "Post Malone", id: "246dkjvS1zLTtiykXe5h60" },
    { name: "BTS", id: "3Nrfpe0tUJi4K4DXYWgMUX" },
    { name: "Shawn Mendes", id: "7n2wHs1TKAczGzO7Dd2rGr" },
    { name: "Sabrina Carpenter", id: "3MdG05syQeRYPPcClLaUGl" },
    { name: "Blackpink", id: "41MozSoPIsD1dJM0CLPjZF" },
    { name: "Diljit Dosanjh", id: "1t3H5k1Vz9xw9v7JgJq1Tl" },
    { name: "Karan Aujla", id: "7BdMNE9tZc4z1G7ZUw3V9G" },
    { name: "Yo Yo Honey Singh", id: "5f4QpKfy7ptCHwTqspnSJI" },
  ];

  // Fetch artists
  const fetchArtists = useCallback(async () => {
    const token = localStorage.getItem("spotify_access_token");
    try {
      const response = await axios.get("https://api.spotify.com/v1/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: query,
          type: "artist",
          limit: 7,
          market: "IN",
        },
      });
      setShowArtists(true);
      setArtists(response.data.artists.items);

      return response.data.artists.items.map((artist) => ({
        id: artist.id,
        name: artist.name,
      }));
    } catch (error) {
      console.error("Error fetching artists: ", error);
    }
  }, [query]);

  // fetch suggested songs
  const fetchSongs = async () => {
    const token = localStorage.getItem("spotify_access_token");
    if (!selectedArtist) {
      console.error("No artist ID selected");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.spotify.com/v1/artists/${selectedArtist}/top-tracks`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            market: "IN", // Specify the market (region)
          },
        }
      );

      setSuggestedSongs((prev) => [...prev, ...response.data.tracks]);
      console.log("Recommended Songs:", response.data.tracks);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }

  };

  // Handle artist selection
  const handleArtistSelection = (artist) => {
    setSelectedArtist(artist.id);
    setSuggestedSongs([]);
    setShowArtists(false);
    setQuery(artist.name);
    console.log(artist);
    console.log("artist selected:", artist.id);
    console.log("artist name:", artist.name);
  };

  // Debounce the fetchArtists function
  useEffect(() => {
    const id = setTimeout(() => {
      if (query) {
        fetchArtists();
      }
    }, 200);

    return () => {
      clearTimeout(id);
    };
  }, [query, fetchArtists]);
  // const debouncedFetchArtists = useDebounce(fetchArtists, 200);

  // Handle outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setShowArtists(false);
      }
    };
    console.log("dropdown ref:", dropdownRef);
    console.log("dropdown ref current", dropdownRef.current);
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  }, [dropdownRef, inputRef]);
  // useEffect(() => {
  //   if (query) {
  //     debouncedFetchArtists(query);
  //   }
  // }, [query]);

  return (
    <div className="px-40 py-5 flex flex-col">
      {/* Heading */}
      <h1 className="p-4 font-bold text-4xl">
        Select the Singers you love to listen...
      </h1>

      {/* Input singer's name */}
      <div className="p-4 relative">
        <input
          className="bg-[#F0F5F2] text-[#638778] p-4 font-normal text-base rounded-lg w-3/12"
          type="text"
          value={query}
          ref={inputRef}
          onClick={() => setShowArtists(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelectedArtist("");
            setShowArtists(true);
          }}
          placeholder="Start typing the singer's name..."
        />
        {/* {loading && <p>Loading...</p>} */}

        {showArtists && selectedArtist === "" && (
          <ul
            ref={dropdownRef}
            className="absolute top-20 bg-white w-3/12 rounded-lg shadow-lg p-4 z-10"
          >
            {artists.map((artist) => (
              <li
                className="p-2 rounded-lg cursor-pointer hover:bg-[#c8eede]"
                key={artist.id}
                onClick={() => handleArtistSelection(artist)}
              >
                {artist.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Popular Singer's options */}
      <ul className="p-4 flex flex-wrap gap-3">
        {popularSingers.map((singer) => (
          <li
            onClick={() => handleArtistSelection(singer)}
            key={singer.id}
            className={`rounded-lg border border-[#DBE5E0] py-3 px-7 flex gap-3 items-center cursor-pointer ${
              selectedArtist === singer.id ? "bg-[#c8eede]" : ""
            }`}
          >
            {singer.name}
          </li>
        ))}
      </ul>

      {/* Selected Artist */}
      {selectedArtist && (
        <p className="p-4 text-lg font-medium">Selected Artist: {query}</p>
      )}

      {/* Button */}
      <div className="p-3 w-full flex justify-end">
        <button
          onClick={fetchSongs}
          className="px-5 py-2.5 rounded-2xl bg-buttonBgGreen text-buttonTextColor "
        >
          Next
        </button>
      </div>

      {/* Suggested songs */}
      <div>
        {suggestedSongs.length > 0 && (
          <div className="p-4">
            <h1 className="font-bold text-4xl mb-6">Recommendations</h1>
            <div className="grid grid-cols-5 gap-5">
              {suggestedSongs.map((track, index) => (
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

export default SingerPage;
