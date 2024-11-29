const Genre = () => {
  return (
    <div className="w-[225px] pb-3">
      <img
        src=".\src\Components\Images\genre.jpg"
        className="w-[223px] h-[125px] rounded-xl object-cover mb-3"
        alt="Genre"
      />
      <div>
        <h1 className="font-medium text-base">Based on your favourite Genre</h1>
        <p className="text-sm font-normal text-textGreen">
          Tell us your favorite genre, and we&apos;ll recommend songs based on the
          popularity of that genre.
        </p>
      </div>
    </div>
  );
};

export default Genre;
