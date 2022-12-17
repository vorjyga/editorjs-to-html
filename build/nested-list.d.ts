import { Props } from './interfaces';
interface ListItem {
    content: string;
    items: ListItem[];
}
interface Data {
    style: 'ordered' | 'unordered';
    items: ListItem[];
}
export declare function nestedList({ data }: Props<Data>): string;
export {};
