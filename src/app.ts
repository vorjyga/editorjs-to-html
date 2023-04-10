import {transformBlocks} from "./modules";
import { OutputBlockData } from "./modules/interfaces"

export interface OutputData {
    /**
     * Editor's version
     */
    version?: string;

    /**
     * Timestamp of saving in milliseconds
     */
    time?: number;

    /**
     * Saved Blocks
     */
    blocks: OutputBlockData[];
}

const parse = ({ blocks }: OutputData, plugins = {}) => {
    const parsers = Object.assign({}, transformBlocks, plugins);
    return blocks.map(block => {
        if (!parsers[block.type]) {
            debugger;
        }
        return parsers[block.type]
            ? parsers[block.type](block)
            : 'Sorry, not realized yet';
    }).join('')
};

const parseOne = (block: OutputBlockData, plugins = {}) => {
    const parsers = Object.assign({}, transformBlocks, plugins);
    return parsers[block.type]
        ? parsers[block.type](block)
        : 'Sorry, not realized yet';
};

export {
    parse,
    parseOne,
}
