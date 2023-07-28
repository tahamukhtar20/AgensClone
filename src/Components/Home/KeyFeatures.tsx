import { keyFeatures } from "../../Content/keyFeatures.en.ts";

export const KeyFeatures: React.FC = () => {
  return (
    <div className="py-24 grid place-items-center ">
      <h1 className="text-2xl text-center font-bold">{keyFeatures.title}</h1>
      <h4 className="text-center">{keyFeatures.content}</h4>
      <div className="p-5">
        <img
          src={keyFeatures.image.url}
          className="max-h-96"
          alt="agensEnterprisePackage"
        />
      </div>
    </div>
  );
};
