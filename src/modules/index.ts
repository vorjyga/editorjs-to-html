import {delimiter} from "./delimiter";
import {header} from "./header";
import {nestedList} from "./nested-list";
import {paragraph} from "./paragraph";
import {table} from "./table";

export const transformBlocks = {
    delimiter: delimiter,
    header: header,
    list: nestedList,
    paragraph: paragraph,
    table: table,
}
