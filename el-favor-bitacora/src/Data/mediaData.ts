// src/Data/mediaData.ts

export type MediaType = "image" | "video";

export interface MediaItem {
  id: string;
  type: MediaType;
  url: string;
}

export const projectMedia: MediaItem[] = [
  // Imágenes de prueba generadas dinámicamente
  { id: "0", type: "image", url: "https://picsum.photos/id/1015/800/600" },
  { id: "1", type: "image", url: "https://picsum.photos/id/1025/800/600" },
  { id: "2", type: "image", url: "https://picsum.photos/id/1035/800/600" },
  // Un video de prueba clásico de programación
  {
    id: "3",
    type: "video",
    url: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
];
