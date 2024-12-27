const Discover = () => {
  return (
    <div className="w-full p-4 relative">
      <img
        src="/Images/main.png"
        className="w-full object-cover rounded-xl"
        alt="Description"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-5xl tracking-tight mb-6 text-white">
          Discover new music with Muse
        </h1>
        <button className="bg-buttonBgGreen text-buttonTextColor rounded-3xl font-bold text-base px-5 py-2">
          Get Recommendations
        </button>
      </div>
    </div>
  );
};

export default Discover;
