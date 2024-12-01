import { useNavigate } from "react-router-dom";
import { Mood, Genre, Singer, Playlist } from "../../index.js";

const CardContainer = () => {
  const cards = [
    { name: "Mood", element: <Mood />, path: "/mood" },
    { name: "Genre", element: <Genre />, path: "/genre" },
    { name: "Singer", element: <Singer />, path: "/singer" },
    { name: "Playlist", element: <Playlist />, path: "/playlist" },
  ];

  const navigate = useNavigate();
  return (
    <div className="px-4 py-10 flex flex-col items-center w-full">
      <h1 className="mb-10 font-bold text-4xl tracking-tight">
        How do you want to get recommendations?
      </h1>
      <ul className="flex gap-12">
        {cards.map((card, index) => (
          <li key={index} className="cursor-pointer" onClick={() => navigate(card.path)}>
            {card.element}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;
