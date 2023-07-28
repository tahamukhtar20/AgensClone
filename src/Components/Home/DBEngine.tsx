import { dbEngine, ICard } from "../../Content/dbEngine.en.ts";

const Card: React.FC<{ card: ICard }> = ({ card }) => (
  <>
    <div className="bg-white rounded-lg drop-shadow group w-72 m-6 transition-all duration-300">
      <img
        src={card.image}
        className="group-hover:hidden block transition-all duration-300 object-fit"
        alt="card"
      />
      <ul className="flex-col p-4 hidden group-hover:flex transition-all duration-300">
        {card.content.map((content, index) => (
          <li key={index} className="list-disc">
            {content}
          </li>
        ))}
      </ul>
    </div>
  </>
);

export const DBEngine: React.FC = () => {
  return (
    <section className="bg-slate-200 py-24 flex flex-col">
      <h1 className="text-2xl text-center font-bold">{dbEngine.title}</h1>
      <h2 className="text-center underline p-2">{dbEngine.subtitle}</h2>
      <div className="p-2">
        <h6 className="text-center">{dbEngine.content}</h6>
      </div>
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-1 p-2 place-items-center">
        {dbEngine.cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </section>
  );
};
