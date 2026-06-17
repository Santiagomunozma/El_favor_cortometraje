// src/Data/mediaData.ts

export type MediaType = "image" | "video";

export interface MediaItem {
  id: string;
  type: MediaType;
  url: string;
}

export const projectMedia: MediaItem[] = [
  // Imágenes de prueba generadas dinámicamente
  {
    id: "0",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667190/IMG_8204_kqt9i1.jpg",
  },
  {
    id: "1",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667189/IMG_8202_dk5wgg.jpg",
  },
  {
    id: "2",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667187/IMG_8256_gqdtrh.jpg",
  },
  {
    id: "3",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667186/IMG_8226_kd1yoo.jpg",
  },
  {
    id: "4",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667184/IMG_8263_elt14o.jpg",
  },
  {
    id: "5",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667178/IMG_8205_mizfxq.jpg",
  },
  {
    id: "6",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667178/IMG_8221_mxz7pc.jpg",
  },
  {
    id: "7",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667177/IMG_8209_aliej5.jpg",
  },
  {
    id: "8",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667169/DSC_0178_jmg6co.jpg",
  },
  {
    id: "9",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667169/DSC_0151_n6xjcz.jpg",
  },
  {
    id: "10",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667168/DSC_0177_f1whbh.jpg",
  },
  {
    id: "11",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667165/DSC_0116_juqzv2.jpg",
  },
  {
    id: "12",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667162/DSC_0038_yzjfdu.jpg",
  },
  {
    id: "13",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667162/DSC_0094_nmpyng.jpg",
  },
  {
    id: "14",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667161/DSC_0026_glje4n.jpg",
  },
  {
    id: "15",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667160/DSC_0051_mrehyz.jpg",
  },
  {
    id: "16",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667157/DSC_0033_evwwqg.jpg",
  },
  {
    id: "17",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667155/DSC_0021_ffcwhs.jpg",
  },
  {
    id: "18",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667154/DSC_0008_uprzgb.jpg",
  },
  {
    id: "19",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667154/DSC_0020_gojwmk.jpg",
  },
  {
    id: "20",
    type: "image",
    url: "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1781667150/DSC_0007_dlsdqc.jpg",
  },
];
