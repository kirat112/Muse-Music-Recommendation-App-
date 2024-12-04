import { useState } from "react";

const PlaylistPage = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [privacyType, setPrivacyType] = useState("public");
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [numberOfSongs, setNumberOfSongs] = useState(1);

  const genres = [
    "Pop",
    "Rock",
    "Jazz",
    "Hip-Hop",
    "Classical",
    "Country",
    "Electronic",
    "R&B",
    "Reggae",
  ];

  const handleGenreClick = (genre) => {
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(genre)
        ? prevGenres.filter((g) => g !== genre)
        : [...prevGenres, genre]
    );
  };

  const handleGenreChange = (event) => {
    const selectedGenre = event.target.value;
    setSelectedGenres((prevGenres) =>
      prevGenres.includes(selectedGenre)
        ? prevGenres.filter((g) => g !== selectedGenre)
        : [...prevGenres, selectedGenre]
    );
  };

  return (
    <div className="px-40 py-5 flex flex-col">
      <h1 className="p-4 font-bold text-4xl">Create a Playlist</h1>
      <div className="p-4">
        <input
          className="bg-[#F0F5F2] text-[#638778] p-4 font-normal text-base rounded-lg w-full mb-4"
          type="text"
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <textarea
          className="bg-[#F0F5F2] text-[#638778] p-4 font-normal text-base rounded-lg w-full mb-4"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          className="bg-[#F0F5F2] text-[#638778] p-4 font-normal text-base rounded-lg w-full mb-4"
          placeholder="Privacy Type"
          value={privacyType}
          onChange={(e) => setPrivacyType(e.target.value)}
        >
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        <div className="mb-4">
          <h2 className="font-bold text-xl mb-2">Select Genres</h2>
          <select
            className="bg-[#F0F5F2] text-[#638778] p-4 font-normal text-base rounded-lg w-full mb-4"
            onChange={handleGenreChange}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedGenres.map((genre) => (
              <button
                key={genre}
                className="py-2 px-4 rounded-lg border bg-theme-color"
                onClick={() => handleGenreClick(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <h2 className="font-bold text-xl mb-2">Number of Songs</h2>
          <input
            type="range"
            min="1"
            max="100"
            value={numberOfSongs}
            onChange={(e) => setNumberOfSongs(e.target.value)}
            className="w-full"
          />
          <div className="text-center">{numberOfSongs}</div>
        </div>
        <button className="bg-buttonBgGreen text-buttonTextColor py-2 px-4 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default PlaylistPage;
