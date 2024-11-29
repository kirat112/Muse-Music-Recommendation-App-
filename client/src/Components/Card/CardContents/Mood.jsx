const Mood = () => {
  return (
    <div className="w-[225px] pb-3">
      <img
        src=".\src\Components\Images\mood.jpg"
        className="w-[223px] h-[125px] rounded-xl object-cover mb-3"
        alt="Mood"
      />
      <div>
        <h1 className="font-medium text-base">Based on your Mood</h1>
        <p className="text-sm font-normal text-textGreen">
          Tell us how you feel, and we&apos;ll recommend songs that suit your
          mood.
        </p>
      </div>
    </div>
  );
};

export default Mood;
