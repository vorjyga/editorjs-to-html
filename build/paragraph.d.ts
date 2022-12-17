import { AlignmentType, Props } from './interfaces';
interface Data {
    text: string;
    alignment?: AlignmentType;
    align?: AlignmentType;
}
export declare function paragraph({ data }: Props<Data>): string;
export {};
