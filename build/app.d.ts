import { Props } from "./modules/interfaces";
interface OutputData {
    blocks: Props<any>[];
}
declare const parser: (plugins?: {}) => {
    parse: ({ blocks }: OutputData) => string[];
};
export default parser;
