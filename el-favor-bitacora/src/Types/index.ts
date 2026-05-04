export type CastStage = "applied" | "contacted" | "video_sent" | "selected";

export type CastRole = "Juan David" | "Héctor";

export interface CastMember {
  id: number;
  name: string;
  role: CastRole[];
  email: string;
  reelUrl: string;
  castingUrl: string;
  photo: string;
  stage: CastStage;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface Rehearsal {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  date: string;
}
