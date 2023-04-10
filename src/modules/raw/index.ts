import {Props, RawBlock} from "../interfaces";
import { baseBlock } from "../utils"

export function raw({ data }: Props<RawBlock>) {
    return baseBlock(data.html);
}
