import {HeaderBlock, Props} from './interfaces';
import { baseBlock } from './utils';



export function header ({ data }: Props<HeaderBlock>) {
  const { anchor, level, text } = data;
  const item = `<h${level} class="ce-header" id="${anchor}">${text}</h${level}>`;
  return baseBlock(item);
}
