import { Props } from './interfaces';
interface Data {
    withHeadings: boolean;
    content: Array<Array<string>>;
}
export declare function table({ data }: Props<Data>): string;
export {};
