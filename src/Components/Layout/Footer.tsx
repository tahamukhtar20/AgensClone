import React from "react";
import footerData from "../../Content/footer.data.json";

interface IIcon {
  name: string;
  url: string;
}

interface ITag {
  name: string;
  url: string;
}

interface IBottomBar {
  bottom: {
    label: string;
    icons: IIcon[];
    tags: ITag[];
  };
}

interface IFooterSection {
  title: string;
  url: string;
  children: IFooterSection[];
}

interface IContent {
  content: {
    footerSections: IFooterSection[];
  };
}

interface IFooterData extends IBottomBar, IContent {}

export const Footer: React.FC = () => {
  const FooterData: IFooterData = footerData;
  const Sections = (
    <>
      {FooterData.content.footerSections.map((section, index) => {
        return (
          <div key={index}>
            <span className="footer-title">{section.title}</span>
            {section.children.map((child, index) => {
              return (
                <a key={index} className="link link-hover" href={child.url}>
                  {child.title}
                </a>
              );
            })}
          </div>
        );
      })}
    </>
  );
  return (
    <footer className="footer p-10 lg:px-60 bg-base-200 text-base-300-content">
      {Sections}
    </footer>
  );
};
