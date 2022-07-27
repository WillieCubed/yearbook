export type TextMemory = {
  title: string;
  description: string;
  type: "text";
};

type ImageData = {
  height: string;
  width: string;
};

export type ImageMemory = {
  imageUrl: string;
  caption: string;
  type: "image";
};

export type VideoMemory = {
  videoUrl: string;
  type: "video";
};

export type ScrapbookMemory = {
  images: string[];
  title: string;
  type: "scrapbook";
};

export type HighlightMemory = {
  type: "highlight";
};

export type EncouragementMemory = {
  type: "encouragement";
};

export type CollabMemory = {
  type: "collab";
};

export type Memory =
  | TextMemory
  | ImageMemory
  | VideoMemory
  | ScrapbookMemory
  | HighlightMemory
  | EncouragementMemory
  | CollabMemory;

type BaseStatistic = {
  id: string;
};

export type ProgramStatistic =
  | BaseStatistic
  | (BaseStatistic & {
      title: string;
      description: string;
      value: number | string;
    });

/**
 * A wrapper for memories to be rendered by the client.
 */
export type MemoryCollection = {
  /**
   * All of the highlights for this collection to display.
   */
  memories: Memory[];
  /**
   * Other information about the experiences in these memories.
   */
  statistics: ProgramStatistic[];
  /**
   * ISO 8601 timestamp of when this was generated.
   */
  generated: string;
  /**
   * A URL to an image to share to social media.
   */
  recommendedShare: string;
};
