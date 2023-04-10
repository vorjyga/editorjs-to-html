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

const parser = (plugins = {}) => {
    const parsers = Object.assign({}, transformBlocks, plugins);

    return {
        parse: ({ blocks }: OutputData) => {
            return blocks.map(block => {
                if (!parsers[block.type]) {
                    debugger;
                }
                return parsers[block.type]
                    ? parsers[block.type](block)
                    : 'Sorry, not realized yet';
            }).join('')
        },
        parseOne: (block) => {
            return parsers[block.type]
                ? parsers[block.type](block)
                : 'Sorry, not realized yet';
        },
    }
}

export default parser;
