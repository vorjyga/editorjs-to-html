import './index.css';
import { baseBlock, make } from "../utils"
import {Props, QuoteBlock} from "../interfaces";

const CSS = {
    baseClass: 'cdx-block',
    wrapper: 'cdx-quote',
    text: 'cdx-quote__text',
    input: 'cdx-input',
    caption: 'cdx-quote__caption',
}

export function quote({ data }: Props<QuoteBlock>) {
    const wrapper = make('div');
    const container = make('blockquote', [CSS.baseClass, CSS.wrapper]);
    const quote = make('div', [CSS.input, CSS.text], {
        innerHTML: data.text,
    });
    const caption = make('div', [CSS.input, CSS.caption], {
        innerHTML: data.caption,
    });

    container.appendChild(quote);
    container.appendChild(caption);
    wrapper.appendChild(container);
    return baseBlock(wrapper.innerHTML);
}
