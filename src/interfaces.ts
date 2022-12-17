export type BlockType = 'list' | 'Header';
export type AlignmentType =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'inherit';

interface Tunes {
  alignmentTune?: {
    alignment: AlignmentType;
  };
}
export interface Props<T> {
  data: T;
  id: string;
  tunes?: Tunes;
  type: BlockType;
}
