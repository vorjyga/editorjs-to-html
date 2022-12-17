import { Props } from './interfaces';
import { baseBlock } from './utils';

interface Data {
  anchor: string;
  level: number;
  text: string;
}

export function header ({ data }: Props<Data>) {
  const { anchor, level, text } = data;
  const item = `<h${level} class="ce-header" id="${anchor}">${text}</h${level}>`;
  return baseBlock(item);
}
