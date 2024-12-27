const Playlist = () => {
  return (
    <div className="w-[225px] pb-3">
      <img
        src="/Images/playlist.jpg"
        className="w-[223px] h-[125px] rounded-xl object-cover mb-3"
        alt="Genre"
      />
      <div>
        <h1 className="font-medium text-base">Create a playlist for you</h1>
        <p className="text-sm font-normal text-textGreen">
          Tell us the number of songs you want in the playlist, and we&apos;ll
          recommend songs based on the popularity of the song.
        </p>
      </div>
    </div>
  );
};

export default Playlist;
