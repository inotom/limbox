# Limbox [![Build Status](https://travis-ci.org/inotom/limbox.svg?branch=master)](https://travis-ci.org/inotom/limbox)

Limited checkbox mithril component.

## Installation

```
$ npm install git://github.com/inotom/limbox.git#v2.0.0 --save-dev
```

## Sample code

```javascript
import m from 'mithril';
import Limbox from 'limbox';

let names = ['Orange', 'Apple', 'Grape', 'Lemon', 'Banana'];
let checkedIndexes = m.prop([]);

m.mount(document.body, {
  view: () => {
    return m('div', [
      m(Limbox, {
        max: 2,
        groupName: 'fruit[]',
        names: names,
        onchange: function(checkedList) {
          checkedIndexes = checkedList;
        }
      }),
      m('ul', checkedIndexes.map(function(index) {
        return m('li', names[index]);
      }))
    ]);
  }
});
```

## Demo

[demo](http://demo.serendip.ws/limbox/)

## Options

| **Parameter** |  **Mandatory** | **Type** | **Default** | **Description**                         |
| ------------- | -------------- | -------- | ----------- | --------------------------------------- |
| `max`         | optional       | Number   | `2`         | Max size of selectable item             |
| `groupName`   | optional       | String   | `limbox[]`  | Element name attribute                  |
| `names`       | Array required | Array    |             | Array of item label text and value text |
| `onchange`    | optional       | Function |             | Callback function                       |

## License

MIT

## Author

iNo
