import m from 'mithril';
import Check from './models/Check';
import CheckList from './models/CheckList';
import pickArg from 'swsutils/src/pickArg';
import existy from 'swsutils/src/existy';

const DEFAULT_MAX = 2;

class Limbox {

  constructor() {
    this.list = [];
    this.groupName = 'limbox[]';
  }

  oninit(vnode) {
    let max = pickArg(vnode.attrs.max, DEFAULT_MAX);
    let names = pickArg(vnode.attrs.names, []);
    let cl = CheckList.create(max);
    names.forEach((name) => {
      cl.add(Check.create(name));
    });
    this.list = cl;
    this.groupName = pickArg(vnode.attrs.groupName, 'limbox[]');
  }

  view(vnode) {
    return m('.sws-limbox', [
      this.list.getAll().map((item, index) => {

        const modifier = item.getState() ? '--checked' : '';

        return m('label', {
          class: `sws-limbox__item-label${modifier}`
        }, [
          m('input', {
            class: `sws-limbox__item-checkbox${modifier}`,
            type: 'checkbox',
            name: this.groupName,
            value: item.getName(),
            checked: item.getState(),
            onchange: (e) => {
              let method = e.target.checked ? 'checkOn' : 'checkOff';
              this.list[method](index);
              if (existy(vnode.attrs.onchange)) {
                vnode.attrs.onchange(this.list.getCheckedIndexList());
              }
            }
          })
        ], item.getName());
      })
    ]);
  }
}

export default Limbox;
