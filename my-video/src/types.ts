export type WordToken = {
  word: string;
  startSec: number;
  endSec: number;
};

export type CaptionLine = {
  text: string;
  startSec: number;
  endSec: number;
};

export type ShortClip = {
  id: string;
  title: string;
  hookBadge: string;
  srcFile: string;
  durationSec: number;
  lines: CaptionLine[];
  words: WordToken[];
};
