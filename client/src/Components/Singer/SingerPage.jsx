const SingerPage = () => {
  const singers = [
    "The Weeknd",
    "Taylor Swift",
    "Drake",
    "Bad Bunny",
    "Ed Sheeran",
    "Ariana Grande",
    "Eminem",
    "Justin Bieber",
    "Post Malone",
    "BTS",
  ];
  return (
    <div className="px-40 py-5 flex flex-col">
      {/* Heading */}
      <h1 className="p-4 font-bold text-4xl">
        Select the Singers you love to listen...
      </h1>

      {/* Input singer's name */}
      <div className="p-4">
        <input
          className="bg-[#F0F5F2] text-[#638778] p-4 font-normal text-base rounded-lg w-3/12"
          type="text"
          placeholder="Start typing the singer's name..."
        />
      </div>

      {/* Popular Singer's options */}
      <ul className="p-4 flex flex-wrap gap-3">
        {singers.map((singer, index) => (
          <li
            key={index}
            className="rounded-lg border border-[#DBE5E0] py-3 px-7 flex gap-3 items-center"
          >
            {singer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingerPage;
