import {AlignmentType, ParagraphBlock, Props} from './interfaces';
import { baseBlock } from './utils';



export function paragraph ({ data }: Props<ParagraphBlock>) {
  const paragraphAlign = data.alignment || data.align || 'inherit';
  const item = `<p class="ce-paragraph cdx-block" style="text-align:${paragraphAlign}">${data.text}</p>`;
  return baseBlock(item);
}
