import {transformBlocks} from "./modules";
import {Props} from "./modules/interfaces";

interface OutputData {
    blocks: Props<any>[]
}


const parser = (plugins = {}) => {
    const parsers = Object.assign({}, transformBlocks, plugins);

    return {
        parse: ({ blocks }: OutputData) => {
            return blocks.map(block => {
                return parsers[block.type]
                    ? parsers[block.type](block)
                    : 'Sorry, not realized yet';
            })
        }
    }
}

export default parser;
