export interface IHeaderItem {
  name: string;
  url: string;
  colored: boolean;
  children: IHeaderItem[];
}

export interface IHeaderData {
  titleImage: string;
  content: IHeaderItem[];
}

export const header: IHeaderData = {
  titleImage: "https://bitnine.net/wp-content/uploads/2021/02/b_logo.png",
  content: [
    {
      name: "Products",
      url: "",
      colored: true,
      children: [
        {
          name: "Graph Database",
          url: "",
          colored: false,
          children: [],
        },
        {
          name: "Relational Database",
          url: "",
          colored: false,
          children: [],
        },
      ],
    },
    {
      name: "Use Cases",
      url: "",
      colored: false,
      children: [],
    },
    {
      name: "Services",
      url: "",
      colored: false,
      children: [],
    },
    {
      name: "Resources",
      url: "",
      colored: false,
      children: [
        {
          name: "Documentation",
          url: "",
          colored: false,
          children: [],
        },
        {
          name: "Learn",
          url: "",
          colored: false,
          children: [],
        },
      ],
    },
    // {
    //   name: "Blog",
    //   url: "",
    //   colored: false,
    //   children: [],
    // },
  ],
};
