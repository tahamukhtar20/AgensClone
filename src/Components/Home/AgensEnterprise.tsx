import React, { useState } from "react";
import {
  AgensData,
  IAgensEnterpriseManager,
} from "../../Content/agensEnterprise.en.ts";

const Card: React.FC<{ manager: IAgensEnterpriseManager }> = ({ manager }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className={`w-full border-2 border-blue-600 rounded-lg  h-20 mb-4 grid place-items-center card-container ${
        isFlipped ? "flipped" : ""
      }`}
      onMouseEnter={handleCardFlip}
      onMouseLeave={handleCardFlip}
    >
      <div className="card-front flex items-center justify-center">
        <h3 className="text-blue-400 font-black">{manager.title}</h3>
      </div>
      <div className="card-back flex items-center justify-center bg-blue-600">
        <ul>
          {manager.content.map((content, index) => (
            <li key={index} className="list-disc text-white">
              {content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const AgensEnterprise: React.FC = () => {
  return (
    <>
      <section className="bg-base-100 py-24 flex flex-col justify-center items-center">
        <h1 className="text-2xl text-center font-bold">{AgensData.title}</h1>
        <h2 className="text-center p-2">{AgensData.description}</h2>
        <div className="w-full justify-center items-center max-w-5xl flex lg:flex-row flex-col">
          <div className="w-1/2">
            <img src={AgensData.agensHaManager.image} alt="agensHaManager" />
          </div>
          <div className="w-1/2">
            {AgensData.agensEnterpriseManager.map((manager, index) => (
              <Card manager={manager} key={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
