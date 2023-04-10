import './index.pcss';
import {table} from "./table";
import {delimiter} from "./delimeter";
import {header} from "./header";
import {nestedList} from "./nestedList";
import {paragraph} from "./paragraph";
import {alert} from "./alert";
import {checklist} from "./checklist";
import {code} from "./code";
import {image} from "./image";
import {linkTool} from "./LinkTool";
import {quote} from "./quote";
import {raw} from "./raw";
import {warning} from "./warning";
import { embed } from "./embed";

export const transformBlocks = {
    alert,
    checklist,
    code,
    delimiter,
    header,
    image,
    LinkTool: linkTool,
    list: nestedList,
    paragraph,
    quote,
    raw,
    table,
    warning,
    embed,
}
