import axios from "axios";
import { useState } from "react";

const MoodPage = () => {
  const options = [
    {
      value: "Happy",
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_49_274)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.7443 6.61758 17.3824 2.25568 12 2.25V2.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.2448 16.5542 16.5542 20.2448 12 20.25V20.25ZM7.5 10.125C7.5 9.50368 8.00368 9 8.625 9C9.24632 9 9.75 9.50368 9.75 10.125C9.75 10.7463 9.24632 11.25 8.625 11.25C8.00368 11.25 7.5 10.7463 7.5 10.125V10.125ZM16.5 10.125C16.5 10.7463 15.9963 11.25 15.375 11.25C14.7537 11.25 14.25 10.7463 14.25 10.125C14.25 9.50368 14.7537 9 15.375 9C15.9963 9 16.5 9.50368 16.5 10.125V10.125ZM16.3997 14.625C15.435 16.2928 13.8309 17.25 12 17.25C10.1691 17.25 8.56594 16.2938 7.60125 14.625C7.45346 14.3925 7.44502 14.0977 7.57928 13.8571C7.71353 13.6166 7.96887 13.469 8.24434 13.4727C8.5198 13.4764 8.77105 13.6309 8.89875 13.875C9.59906 15.0853 10.6997 15.75 12 15.75C13.3003 15.75 14.4009 15.0844 15.1003 13.875C15.3074 13.5162 15.7662 13.3932 16.125 13.6003C16.4838 13.8074 16.6068 14.2662 16.3997 14.625V14.625Z"
              fill="#121714"
            />
          </g>
          <defs>
            <clipPath id="clip0_49_274">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      value: "Sad",
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_49_281)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.7443 6.61758 17.3824 2.25568 12 2.25V2.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.2448 16.5542 16.5542 20.2448 12 20.25V20.25ZM7.5 10.125C7.5 9.50368 8.00368 9 8.625 9C9.24632 9 9.75 9.50368 9.75 10.125C9.75 10.7463 9.24632 11.25 8.625 11.25C8.00368 11.25 7.5 10.7463 7.5 10.125V10.125ZM16.5 10.125C16.5 10.7463 15.9963 11.25 15.375 11.25C14.7537 11.25 14.25 10.7463 14.25 10.125C14.25 9.50368 14.7537 9 15.375 9C15.9963 9 16.5 9.50368 16.5 10.125V10.125ZM16.3988 16.125C16.5465 16.3575 16.555 16.6523 16.4207 16.8929C16.2865 17.1334 16.0311 17.281 15.7557 17.2773C15.4802 17.2736 15.2289 17.1191 15.1012 16.875C14.4009 15.6647 13.3003 15 12 15C10.6997 15 9.59906 15.6656 8.89875 16.875C8.77105 17.1191 8.5198 17.2736 8.24434 17.2773C7.96887 17.281 7.71353 17.1334 7.57928 16.8929C7.44502 16.6523 7.45346 16.3575 7.60125 16.125C8.56594 14.4572 10.1691 13.5 12 13.5C13.8309 13.5 15.4341 14.4562 16.3988 16.125V16.125Z"
              fill="#121714"
            />
          </g>
          <defs>
            <clipPath id="clip0_49_281">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      value: "Love",
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_49_288)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.6875 3C14.7516 3 13.0566 3.8325 12 5.23969C10.9434 3.8325 9.24844 3 7.3125 3C4.10384 3.00362 1.50362 5.60384 1.5 8.8125C1.5 15.375 11.2303 20.6869 11.6447 20.9062C11.8665 21.0256 12.1335 21.0256 12.3553 20.9062C12.7697 20.6869 22.5 15.375 22.5 8.8125C22.4964 5.60384 19.8962 3.00362 16.6875 3V3ZM12 19.3875C10.2881 18.39 3 13.8459 3 8.8125C3.0031 6.43206 4.93206 4.5031 7.3125 4.5C9.13594 4.5 10.6669 5.47125 11.3062 7.03125C11.4218 7.31259 11.6959 7.49627 12 7.49627C12.3041 7.49627 12.5782 7.31259 12.6938 7.03125C13.3331 5.46844 14.8641 4.5 16.6875 4.5C19.0679 4.5031 20.9969 6.43206 21 8.8125C21 13.8384 13.71 18.3891 12 19.3875V19.3875Z"
              fill="#121714"
            />
          </g>
          <defs>
            <clipPath id="clip0_49_288">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      value: "Angry",
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_49_295)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.625 14.25C8.00368 14.25 7.5 13.7463 7.5 13.125C7.5 12.5037 8.00368 12 8.625 12C9.24632 12 9.75 12.5037 9.75 13.125C9.75 13.7463 9.24632 14.25 8.625 14.25V14.25ZM15.375 12C14.7537 12 14.25 12.5037 14.25 13.125C14.25 13.7463 14.7537 14.25 15.375 14.25C15.9963 14.25 16.5 13.7463 16.5 13.125C16.5 12.5037 15.9963 12 15.375 12V12ZM21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25C17.3824 2.25568 21.7443 6.61758 21.75 12V12ZM20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 16.5563 7.44365 20.25 12 20.25C16.5542 20.2448 20.2448 16.5542 20.25 12V12ZM16.0837 7.62563L12 10.3491L7.91625 7.63031C7.69318 7.4816 7.40772 7.46319 7.1674 7.58202C6.92708 7.70084 6.7684 7.93885 6.75115 8.20639C6.7339 8.47393 6.86068 8.73035 7.08375 8.87906L11.5837 11.8791C11.8358 12.0472 12.1642 12.0472 12.4163 11.8791L16.9163 8.87906C17.2611 8.64917 17.3543 8.18327 17.1244 7.83844C16.8945 7.4936 16.4286 7.40042 16.0837 7.63031V7.62563ZM14.6653 16.6256C13.875 16.0997 13.1194 15.75 12 15.75C10.8806 15.75 10.125 16.0997 9.33469 16.6256C8.99806 16.8581 8.90985 17.3175 9.13643 17.6581C9.36301 17.9988 9.82077 18.095 10.1653 17.8744C10.7747 17.4694 11.25 17.25 12 17.25C12.75 17.25 13.2253 17.4694 13.8347 17.8744C14.0577 18.0284 14.3465 18.0501 14.5901 17.9311C14.8337 17.8122 14.9941 17.571 15.0097 17.3004C15.0252 17.0298 14.8936 16.7718 14.6653 16.6256V16.6256Z"
              fill="#121714"
            />
          </g>
          <defs>
            <clipPath id="clip0_49_295">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      value: "Thoughtful",
      img: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_49_302)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2.25C6.61522 2.25 2.25 6.61522 2.25 12C2.25 17.3848 6.61522 21.75 12 21.75C17.3848 21.75 21.75 17.3848 21.75 12C21.7443 6.61758 17.3824 2.25568 12 2.25V2.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.2448 16.5542 16.5542 20.2448 12 20.25V20.25ZM17.0306 15.2194C17.3237 15.5124 17.3237 15.9876 17.0306 16.2806C16.7376 16.5737 16.2624 16.5737 15.9694 16.2806L15 15.3103L14.0306 16.2806C13.8899 16.4215 13.6991 16.5006 13.5 16.5006C13.3009 16.5006 13.1101 16.4215 12.9694 16.2806L12 15.3103L11.0306 16.2806C10.8899 16.4215 10.6991 16.5006 10.5 16.5006C10.3009 16.5006 10.1101 16.4215 9.96937 16.2806L9 15.3103L8.03063 16.2806C7.73757 16.5737 7.26243 16.5737 6.96938 16.2806C6.67632 15.9876 6.67632 15.5124 6.96938 15.2194L8.46937 13.7194C8.61005 13.5785 8.80094 13.4994 9 13.4994C9.19906 13.4994 9.38995 13.5785 9.53063 13.7194L10.5 14.6897L11.4694 13.7194C11.6101 13.5785 11.8009 13.4994 12 13.4994C12.1991 13.4994 12.3899 13.5785 12.5306 13.7194L13.5 14.6897L14.4694 13.7194C14.6101 13.5785 14.8009 13.4994 15 13.4994C15.1991 13.4994 15.3899 13.5785 15.5306 13.7194L17.0306 15.2194ZM7.5 10.125C7.5 9.50368 8.00368 9 8.625 9C9.24632 9 9.75 9.50368 9.75 10.125C9.75 10.7463 9.24632 11.25 8.625 11.25C8.00368 11.25 7.5 10.7463 7.5 10.125V10.125ZM14.25 10.125C14.25 9.50368 14.7537 9 15.375 9C15.9963 9 16.5 9.50368 16.5 10.125C16.5 10.7463 15.9963 11.25 15.375 11.25C14.7537 11.25 14.25 10.7463 14.25 10.125V10.125Z"
              fill="#121714"
            />
          </g>
          <defs>
            <clipPath id="clip0_49_302">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
  ];

  const [selectedMood, setSelectedMood] = useState("");
  // const [description, setDescription] = useState("");
  const [suggestedSongs, setSuggestedSongs] = useState([]);

  const moodGenreMap = {
    Happy: "pop,dance,funk",
    Sad: "acoustic",
    Love: "romantic",
    Angry: "metal,punk,rock",
    Thoughtful: "ambient",
  };

  const genre = moodGenreMap[selectedMood];

  const handleSelectedMood = (event) => {
    setSelectedMood(event.target.value);
    if (suggestedSongs.length > 0) {
      setSuggestedSongs([]);
    }
  };

  const fetchSongs = async () => {
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
      setSuggestedSongs((prev) => [...prev, ...response.data.tracks.items]);
      console.log("response:", response.data.tracks.items);
    } catch (error) {
      console.error("Error fetching songs:", error);
    }
    setSelectedMood("");
  };
  return (
    <div className="px-40 py-5 flex flex-col">
      <div className="flex-grow">
        {/* Heading */}
        <h1 className="p-4 font-bold text-4xl">How are you feeling today?</h1>
        {/* Options */}
        <ul className="p-4 flex justify-between ">
          {options.map((option, index) => (
            <li
              className={`rounded-lg border border-[#DBE5E0] py-4 px-8 flex gap-3 items-center cursor-pointer ${
                selectedMood === option.value ? "bg-[#F0F5F2]" : ""
              }`}
              key={index}
              onClick={handleSelectedMood}
            >
              <span>{option.img}</span>
              <input
                className="cursor-pointer"
                type="button"
                value={option.value}
              />
            </li>
          ))}
        </ul>
        {/* Description */}
        {/* <div className="p-4">
          <input
            className="bg-[#F0F5F2] text-[#638778] p-4 font-normal text-base rounded-lg"
            type="text"
            placeholder="Describe your mood"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div> */}
        {/* Button */}
        <div className="p-3 w-full flex justify-end">
          <button
            onClick={fetchSongs}
            className="px-5 py-2.5 rounded-2xl bg-buttonBgGreen text-buttonTextColor "
          >
            Next
          </button>
        </div>
        {/* suggested songs */}
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
                    <p className="font-normal text-sm">
                      {track.artists[0].name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodPage;
