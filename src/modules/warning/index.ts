import './index.pcss';
import {Props, WarningBlock} from "../interfaces";
import { baseBlock } from "../utils"

export function warning({ data }: Props<WarningBlock>) {
    return baseBlock(`
        <div class="cdx-block cdx-warning">
            <div class="cdx-input cdx-warning__title">
                ${data.title}
            </div>
            <div class="cdx-input cdx-warning__message">
                ${data.message}
            </div>
        </div>`);
}
