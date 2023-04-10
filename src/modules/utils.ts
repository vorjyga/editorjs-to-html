export function baseBlock (props: string) {
  return `<div class="ce-block"><div class="ce-block__content">${props}</div></div>`;
}

export function make(tagName: string, classNames: string | string[] | null = null, attributes = {}) {
    const el = document.createElement(tagName);

    if (Array.isArray(classNames)) {
      el.classList.add(...classNames);
    } else if (classNames) {
      el.classList.add(classNames);
    }

    for (const attrName in attributes) {
      el[attrName] = attributes[attrName];
    }

    return el;
}
