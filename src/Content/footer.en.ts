// export interface IIcon {
//   name: string;
//   url: string;
// }

export interface ITag {
  name: string;
  url: string;
}

export interface IBottomBar {
  bottom: {
    label: string;
    // icons: IIcon[];
    tags: ITag[];
  };
}

export interface IFooterSection {
  title: string;
  url: string;
  children: IFooterSection[];
}

export interface IContent {
  content: {
    footerSections: IFooterSection[];
  };
}

export interface IFooterData extends IBottomBar, IContent {}

export const footerData: IFooterData = {
  bottom: {
    label: "© 2023 by Bitnine Global Inc. All Rights Reserved.",
    //   icons: [
    //     {
    //       name: "twitter",
    //       url: "https://twitter.com/neo4j",
    //     },
    //     {
    //       name: "facebook",
    //       url: "https://www.facebook.com/Neo4j-76891987933/",
    //     },
    //     {
    //       name: "linkedin",
    //       url: "https://www.linkedin.com/company/neo4j",
    //     },
    //     {
    //       name: "github",
    //       url: "",
    //     },
    //     {
    //       name: "stack-overflow",
    //       url: "https://stackoverflow.com/questions/tagged/neo4j",
    //     },
    //     {
    //       name: "youtube",
    //       url: "https://www.youtube.com/user/NeoTechnology",
    //     },
    //     {
    //       name: "medium",
    //       url: "https://medium.com/neo4j",
    //     },
    //   ],
    tags: [
      {
        name: "Apache AGE",
        url: "",
      },
      {
        name: "CONTENT",
        url: "",
      },
    ],
  },
  content: {
    footerSections: [
      {
        title: "Products",
        url: "",
        children: [
          {
            title: "Relational Database",
            url: "",
            children: [],
          },
          {
            title: "Graph Database",
            url: "",
            children: [],
          },
          {
            title: "Graph-based Solution",
            url: "",
            children: [],
          },
        ],
      },
      {
        title: "Use Cases",
        url: "",
        children: [],
      },
      {
        title: "Services",
        url: "",
        children: [],
      },
      {
        title: "Resources",
        url: "",
        children: [
          {
            title: "Documentation",
            url: "",
            children: [],
          },
          {
            title: "Learn",
            url: "",
            children: [],
          },
        ],
      },
      {
        title: "Blog",
        url: "",
        children: [],
      },
      {
        title: "Company",
        url: "",
        children: [
          {
            title: "About Us",
            url: "",
            children: [],
          },
          {
            title: "Contact",
            url: "",
            children: [],
          },
        ],
      },
    ],
  },
};
