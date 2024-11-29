import {Mood, Genre, Singer, Playlist} from "../../index.js"

const CardContainer = () => {
    const cards = [
        {name: "Mood", element: <Mood/>},
        {name: "Genre", element: <Genre/>},
        {name: "Singer", element: <Singer/>},
        {name: "Playlist", element: <Playlist/>},
    ]
  return (
    <div className="px-4 py-10 flex flex-col items-center">
        <h1 className="mb-10 font-bold text-4xl tracking-tight">How do you want to get recommendations?</h1>
      <ul className="flex gap-3">
        {cards.map((card, index) => (
          <li key={index}>
            {card.element}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CardContainer
