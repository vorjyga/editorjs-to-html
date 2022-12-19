import { delimiter } from "./delimiter";
import { header } from "./header";
import { nestedList } from "./nested-list";
import { paragraph } from "./paragraph";
import { table } from "./table";
export declare const transformBlocks: {
    delimiter: typeof delimiter;
    header: typeof header;
    list: typeof nestedList;
    paragraph: typeof paragraph;
    table: typeof table;
};
