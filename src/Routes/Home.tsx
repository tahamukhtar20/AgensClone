import { Hero } from "../Components/Home/Hero";
import { PackageImage } from "../Components/Home/PackageImage.tsx";
import { KeyFeatures } from "../Components/Home/KeyFeatures.tsx";
import { DBEngine } from "../Components/Home/DBEngine.tsx";
import { AgensEnterprise } from "../Components/Home/AgensEnterprise.tsx";
import {useEffect} from "react";

export const Home: React.FC = () => {
  useEffect(() => {
    localStorage.getItem("Login") === "true"? null : window.location.replace("/login");
  }, [])
  return (
    <>
        {localStorage.getItem("Login") === "true" && <>
      <Hero />
      <PackageImage />
      <KeyFeatures />
      <DBEngine />
      <AgensEnterprise />
    </>
        }
    </>
  );
};
