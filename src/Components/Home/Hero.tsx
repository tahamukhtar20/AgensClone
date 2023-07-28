
import { heroContent } from "../../Content/hero.en.ts";

export const Hero: React.FC = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-28">
        <div className="flex-1">
          <img className="h-16 mb-10" src={heroContent.image} alt="hero" />
        </div>
        <div className="flex-1">
          <h1 className="text-2xl text-center font-bold">
            {heroContent.title}
          </h1>
          <article className="list-inside flex flex-col items-center w-full justify-center">
            {heroContent.dataPoints.map((dataPoint, index) => (
              <p key={index} className="text-center w-3/5 pb-3">
                {dataPoint}
              </p>
            ))}
          </article>
          <div className="flex flex-wrap items-center justify-center">
            {heroContent.buttons.map((button, index) => (
              <a
                key={index}
                className="btn btn-primary mx-2"
                href={button.link}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
