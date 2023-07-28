import { packageImage } from "../../Content/packageImage.en.ts";

export const PackageImage: React.FC = () => {
  return (
    <div className="py-24 bg-slate-200 grid place-items-center">
      <img src={packageImage.image.url} alt="agensEnterprisePackage" />
    </div>
  );
};
