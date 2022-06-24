type TextMemory = {};
type ImageMemory = {};
type ScrapbookMemory = {};
type HighlightMemory = {};
type EncouragementMemory = {};
type UpcomingMemory = {};
type CollabMemory = {};

export type Memory =
  | TextMemory
  | ImageMemory
  | ScrapbookMemory
  | HighlightMemory
  | EncouragementMemory
  | UpcomingMemory
  | CollabMemory;

type BaseStatistic = {};

export type ProgramStatistic = BaseStatistic & {
  title: string;
  description: string;
  value: number | string;
};

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
