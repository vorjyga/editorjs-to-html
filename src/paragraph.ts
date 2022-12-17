import { AlignmentType, Props } from './interfaces';
import { baseBlock } from './utils';

interface Data {
  text: string;
  alignment?: AlignmentType;
  align?: AlignmentType;
}

export function paragraph ({ data }: Props<Data>) {
  const paragraphAlign = data.alignment || data.align || 'inherit';
  const item = `<p class="ce-paragraph cdx-block" style="text-align:${paragraphAlign}">${data.text}</p>`;
  return baseBlock(item);
}
