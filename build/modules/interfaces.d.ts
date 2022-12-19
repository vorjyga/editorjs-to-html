export type BlockType = 'list' | 'header' | 'paragraph' | 'table' | 'delimiter';
export type AlignmentType = 'start' | 'end' | 'left' | 'right' | 'center' | 'justify' | 'inherit';
export type BlocksType = HeaderBlock | ListBlock | ParagraphBlock | TableBlock;
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
export interface HeaderBlock {
    anchor: string;
    level: number;
    text: string;
}
export interface ListItem {
    content: string;
    items: ListItem[];
}
export interface ListBlock {
    style: 'ordered' | 'unordered';
    items: ListItem[];
}
export interface ParagraphBlock {
    text: string;
    alignment?: AlignmentType;
    align?: AlignmentType;
}
export interface TableBlock {
    withHeadings: boolean;
    content: Array<Array<string>>;
}
export {};
