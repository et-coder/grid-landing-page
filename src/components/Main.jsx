import { cards } from "../constants";

const Main = () => {
  return (
    <main className="grid grid-cols-1 grid-rows-5 lg:grid-rows-2 lg:grid-cols-[1fr_repeat(2,395px)]">
      <div className="border-b border-b-white/30 px-[31px] lg:px-[45px] flex flex-col items-center justify-center gap-6 row-span-2">
        <h1 className="text-[45px] lg:text-[60px] text-white font-medium leading-12 lg:leading-15 lg:w-[400px] lg:self-start">
          A classroom for every child.
        </h1>
        <p className="text-[17px] text-white/90 lg:self-start lg:w-[420px]">
          We fund the schools, train the teachers, and measure what works
          &mdash; so every child we reach today becomes a graduate tomorrow.
        </p>
      </div>
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col justify-between h-[330px] px-5 border-b border-b-white/30 py-6 lg:border-l lg:border-l-white/30"
        >
          <div className="flex justify-between">
            <img src={card.image} alt="" className="w-8" />
            <span className="text-4xl text-white font-medium tracking-wider">
              {card.stat}
            </span>
          </div>
          <div>
            <p className="text-[17px] text-white font-normal">{card.title}</p>
            <p className="text-white/70 text-[13.5px]">{card.desc}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
