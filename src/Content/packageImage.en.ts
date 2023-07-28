export interface IImageStat {
  url: string;
  width: number;
  height: number;
}

export interface IPackageImage {
  image: IImageStat;
}

export const packageImage: IPackageImage = {
  image: {
    url: "https://bitnine.net/wp-content/uploads/2022/04/img_diagram_eng-e1651143428347.png",
    width: 614,
    height: 513,
  },
};
