import type { ImageMetadata } from "astro";

export type ImageKey = "hero" | "memoryOne" | "memoryTwo" | "future";

export type ImageConfig = {
  src: ImageMetadata;
  alt: string;
  displayMode?: "cover" | "portrait";
  focalPoint: {
    mobile: string;
    desktop: string;
  };
};

type BaseScene = {
  id: string;
  label?: string;
  announcement: string;
};

export type CoverScene = BaseScene & {
  type: "cover";
  title: string;
  body: string;
  date: string;
  action: string;
  imageKey: "hero";
};

export type EditorialScene = BaseScene & {
  type: "editorial";
  title: string;
  body: string;
  quote: string;
  imageKey: "hero" | "future";
  variant: "beginning" | "future";
};

export type MemoriesScene = BaseScene & {
  type: "memories";
  title: string;
  body: string;
  imageKeys: ["memoryOne", "memoryTwo"];
  captions: [string, string];
  quote: string;
};

export type ReasonsScene = BaseScene & {
  type: "reasons";
  number: string;
  title: string;
  instruction: string;
};

export type FinaleScene = BaseScene & {
  type: "finale";
  title: string;
  paragraphs: [string, string];
  closing: string;
  signature: string;
  action: string;
  imageKey: "hero";
};

export type Scene = CoverScene | EditorialScene | MemoriesScene | ReasonsScene | FinaleScene;

export type AnniversaryContent = {
  couple: {
    firstName: string;
    secondName: string;
    relationshipStart: string;
    anniversaryDate: string;
  };
  images: Record<ImageKey, ImageConfig>;
  scenes: [CoverScene, EditorialScene, MemoriesScene, ReasonsScene, EditorialScene, FinaleScene];
  reasons: readonly string[];
};
