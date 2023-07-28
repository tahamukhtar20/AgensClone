export interface IImageStat {
  url: string;
  width: number;
  height: number;
}

export interface IKeyFeatures {
  image: IImageStat;
  title: string;
  content: string;
}

export const keyFeatures: IKeyFeatures = {
  title: "Key Features",
  content:
    "Manage your data with Agens Enterprise Package Essential enterprise features such as high availability and sharding are provided",
  image: {
    url: "https://bitnine.net/wp-content/uploads/2022/04/img_key-features_eng.png",
    width: 4584,
    height: 1801,
  },
};
