import {ListBlock, ListItem, Props} from './interfaces';
import { baseBlock } from './utils';



export function nestedList ({ data }: Props<ListBlock>) {
  const listStyle = data.style === 'unordered' ? 'ul' : 'ol';

  const recursor = (items: ListItem[], listStyle: 'ul' | 'ol') => {
    const list = items.map((item) => {
      if (!item.content && !item.items) {
        return `<li>HELLO${item}</li>`;
      }
      let list = '';
      if (item.items) {
        list = recursor(item.items, listStyle);
      }
      return `<li class="cdx-nested-list__item">
                <div class="cdx-nested-list__item-body">
                  <div class="cdx-nested-list__item-content">${
                    item.content || ''
                  }</div>
                  ${list}
                </div>
              </li>`;
    });

    return `<${listStyle} class="cdx-nested-list cdx-block cdx-nested-list--ordered">${list.join(
      ''
    )}</${listStyle}>`;
  };

  const listStart = recursor(data.items, listStyle);

  return baseBlock(listStart);
}

/*

function liftToVue(element) {
  return {
    template: "<div></div>",
    mounted() {
      this.$el.replaceWith(element);
    },
  };
}
const utils = {
  make(tagName, classNames = null, attributes = {}) {
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
  },
};

const listRender = (items) => {
  interface ListItem {
    content: string;
    items: ListItem[];
  }
  const { data } = items;
  const CSS = {
    baseBlock: "cdx-block",
    wrapper: "cdx-nested-list",
    wrapperOrdered: "cdx-nested-list--ordered",
    wrapperUnordered: "cdx-nested-list--unordered",
    item: "cdx-nested-list__item",
    itemBody: "cdx-nested-list__item-body",
    itemContent: "cdx-nested-list__item-content",
    itemChildren: "cdx-nested-list__item-children",
    settingsWrapper: "cdx-nested-list__settings",
    settingsButton: "cdx-settings-button",
    settingsButtonActive: "cdx-settings-button--active",
  };
  function makeListWrapper(style: string, classes: string[] = []) {
    const tag = style === "ordered" ? "ol" : "ul";
    const styleClass =
      style === "ordered" ? CSS.wrapperOrdered : CSS.wrapperUnordered;
    classes.push(styleClass);
    return utils.make(tag, [CSS.wrapper, ...classes]);
  }
  function addChildrenList(parentItem: HTMLElement, items: ListItem[]) {
    const itemBody = parentItem.querySelector(`.${CSS.itemBody}`);
    const sublistWrapper = makeListWrapper(data.style, [CSS.itemChildren]);
    appendItems(items, sublistWrapper);

    itemBody.appendChild(sublistWrapper);
  }
  function createItem(content: string, items: ListItem[] = []): HTMLElement {
    const itemWrapper = utils.make("li", CSS.item);
    const itemBody = utils.make("div", CSS.itemBody);
    const itemContent = utils.make("div", CSS.itemContent, {
      innerHTML: content,
      contentEditable: false,
    });
    itemBody.appendChild(itemContent);
    itemWrapper.appendChild(itemBody);
    /!**
     * Append children if we have some
     *!/
    if (items && items.length > 0) {
      addChildrenList(itemWrapper, items);
    }

    return itemWrapper;
  }
  function appendItems(items: ListItem[], parentItem: HTMLElement): void {
    items.forEach((item) => {
      const itemEl = createItem(item.content, item.items);
      parentItem.appendChild(itemEl);
    });
  }
  const wrapper = makeListWrapper(data.style, [CSS.baseBlock]);

  if (data.items.length) {
    appendItems(data.items, wrapper);
  } else {
    appendItems(
      [
        {
          content: "",
          items: [],
        },
      ],
      wrapper
    );
  }
  return wrapper;
}; */
