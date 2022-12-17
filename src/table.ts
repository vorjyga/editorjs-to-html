import { Props } from './interfaces';
import { baseBlock } from './utils';

interface Data {
  withHeadings: boolean;
  content: Array<Array<string>>;
}

export function table ({ data }: Props<Data>) {
  const item = `<div class="cdx-block tc-wrap tc-wrap--readonly">
            <div class="tc-table">
              ${data.content.map((row) => 
                `<div class="tc-row">${
                  row.map((cell) => 
                    `<div class="tc-cell">${cell}</div>`
                  ).join('')
                }</div>`
  ).join('')}
            </div>
          </div>`;
  return baseBlock(item);
}
