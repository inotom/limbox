# Limbox [![Build Status](https://travis-ci.org/inotom/limbox.svg?branch=master)](https://travis-ci.org/inotom/limbox)

Limited checkbox mithril component.

## Installation

```
$ npm install git://github.com/inotom/limbox.git#v1.0.0 --save-dev
```

## Sample code

```javascript
import m from 'mithril';
import limbox from 'limbox/limbox';

let names = ['Orange', 'Apple', 'Grape', 'Lemon', 'Banana'];
let checkedIndexes = m.prop([]);

m.mount(document.body, {
  view: () => {
    return m('div', [
      m.component(limbox, {
        max: 2,
        groupName: 'fruit[]',
        names: names,
        checkedIndexes: checkedIndexes
      }),
      m('ul', checkedIndexes().map((index) => {
        return m('li', names[index]);
      }))
    ]);
  }
});
```

## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description** |
| ------------- | -------------- | -------- | ----------- | --------------- |
| **max** | optional | Number | 2 | Max size of selectable item |
| **groupName** | optional | String | limbox[] | Element name attribute |
| **names** | Array required | Array | | Array of item label text and value text |
| **checkedIndexes** | Array required | Array | | Array of selected item index |

## Install

```
$ npm install git://github.com/inotom/limbox.git --save-dev
```

## License

MIT

## Author

iNo
