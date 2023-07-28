export interface IHeroContent {
  image: string;
  title: string;
  dataPoints: string[];
  buttons: {
    text: string;
    link: string;
  }[];
}

export const heroContent: IHeroContent = {
  image: "https://bitnine.net/wp-content/uploads/2022/04/AgenSQL-Logo.png",
  title: "An integration of Bitnine’s DB technology and PG expertise",
  dataPoints: [
    "AgensSQL is an all-new relational DBMS based on PostgreSQL, with years of expertise\nand knowledge accumulated through database research and development.",
    "The enterprise package, along with AgensSQL engine, is an all-in-one solution that ensures\nthe efficiency and scalability of data management.",
    "Get AgensSQL now for stable operation and management services at a reduced\nmaintenance cost.",
  ],
  buttons: [
    {
      text: "Contact",
      link: "",
    },
    {
      text: "Brochure",
      link: "",
    },
    {
      text: "Blog",
      link: "",
    },
  ],
};
