import { Footer, Navbar } from "../../index.js";
const GenrePage = () => {
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
  return (
    <div>
      <Navbar />
      <div className="px-40 py-5 flex flex-col">
        {/* Heading */}
        <div className="p-4 flex flex-col justify-start gap-5">
          <h1 className="font-bold text-4xl">What Genre are you in?</h1>
          <p className="font-normal text-sm text-[#638778]">
            We&apos;ll use these to personalize your recommendations.
          </p>
        </div>

        {/* Options */}
        <ul className="p-4 flex flex-col gap-3">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-[15px] border border-[#DBE5E0] rounded-xl flex gap-4"
            >
              <input className="cursor-pointer" type="radio" name={option} id={option} value={option} />
              <label className="cursor-pointer" htmlFor={option}>{option}</label>
            </div>
          ))}
        </ul>

        {/* button */}
        <div className="p-3 w-full flex justify-end">
          <button className="px-5 py-2.5 rounded-2xl bg-buttonBgGreen text-buttonTextColor ">
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenrePage;
