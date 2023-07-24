# editorjs-to-html
An utility to parse editorjs JSON data to HTML code which looks like as you see in editor mode.
Supports basic editorjs blocks which are customizable as well. Extendable.

# Installation

run 
`npm install editorjs-html`

# Usage

```
import edjsParser from 'editorjs-to-html';

const edjsParser = edjsHTML();

let html = edjsParser.parse(editorjs_clean_data);
```

You can also extend pre-configured blocks by putting object in edjsHTML which has an structure:
```
{'block-name': (args) => template}
```

# Supported Block Types
-    alert,
-    checklist,
-    code,
-    delimiter,
-    header,
-    image,
-    LinkTool,
-    list,
-    paragraph,
-    quote,
-    raw,
-    table,
-    warning,
-    embed,

# License
MIT Public License
