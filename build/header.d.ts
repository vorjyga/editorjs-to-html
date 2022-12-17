import { Props } from './interfaces';
interface Data {
    anchor: string;
    level: number;
    text: string;
}
export declare function header({ data }: Props<Data>): string;
export {};
