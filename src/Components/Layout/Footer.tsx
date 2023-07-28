import { footerData } from "../../Content/footer.en.ts";

export const Footer: React.FC = () => {
  const Sections = (
    <>
      {footerData.content.footerSections.map((section, index) => {
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
  const BottomBar = (
    <div className="flex-none">
      <div className="divider" />
      <div className="flex flex-wrap items-center justify-center md:justify-between">
        <div className="flex-none container mx-auto">
          <span className="footer-title">{footerData.bottom.label}</span>
        </div>
        <div className="flex-none">
          {footerData.bottom.tags.map((tag, index) => {
            return (
              <a
                key={index}
                className="btn btn-ghost btn-sm rounded-btn"
                href={tag.url}
              >
                {tag.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
  return (
    <>
      <footer className=" p-10 lg:px-60 bg-base-100 h-80 text-base-300-content">
        <div className="footer">{Sections}</div>
        <div>{BottomBar}</div>
      </footer>
    </>
  );
};
