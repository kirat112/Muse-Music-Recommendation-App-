import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import { Mood, Genre, Singer, Playlist, MoodPage } from "../../index.js";

const CardContainer = () => {
  const cards = [
    { name: "Mood", element: <Mood /> },
    { name: "Genre", element: <Genre /> },
    { name: "Singer", element: <Singer /> },
    { name: "Playlist", element: <Playlist /> },
  ];

  const router = createBrowserRouter([
    {path: "/mood", element: <MoodPage/>},
  ]);

  const navigate = useNavigate();
  return (
    <div className="px-4 py-10 flex flex-col items-center w-full">
      <RouterProvider router={router}/>
      <h1 className="mb-10 font-bold text-4xl tracking-tight">
        How do you want to get recommendations?
      </h1>
      <ul className="flex gap-12">
        {cards.map((card, index) => (
          <li key={index} onClick={()=>navigate(card.path)}>{card.element}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;
