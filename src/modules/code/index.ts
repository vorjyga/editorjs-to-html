import './index.pcss';
import {CodeBlock, Props} from "../interfaces";
import { baseBlock } from "../utils"

export function code ({ data }: Props<CodeBlock>) {
    const item = `
        <div class="cdx-block ce-code">
            <textarea class="ce-code__textarea cdx-input" placeholder="Enter a code" disabled="">
                ${data.code}
            </textarea>
        </div>
    `;
    return baseBlock(item);

}
