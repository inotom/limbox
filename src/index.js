/*!
 * Limbox
 *
 * @author iNo <wdf7322@yahoo.co.jp>
 * @version 1.0.0
 * @license MIT
 */

import m from 'mithril';
import Check from './Check';
import CheckList from './CheckList';
import pickArg from 'swsutils/src/pickArg';

const DEFAULT_MAX = 2;

export default {
  controller: (opts) => {
    let max = pickArg(opts.max, DEFAULT_MAX);
    let checkedIndexes = pickArg(opts.checkedIndexes, m.prop([]));
    let groupName = pickArg(opts.groupName, 'limbox[]');
    let names = pickArg(opts.names, []);
    let cl = CheckList.create(max);
    names.forEach((name) => {
      cl.add(Check.create(name));
    });
    return {
      list: cl,
      checkedIndexes: checkedIndexes,
      groupName: groupName
    };
  },
  view: (ctrl) => {
    let list = ctrl.list;
    return m('div.limbox-container', [
      list.getAll().map((item, index) => {
        return m('label', [
          m('input', {
            type: 'checkbox',
            name: ctrl.groupName,
            value: item.getName(),
            checked: item.getState(),
            onchange: (e) => {
              let method = e.target.checked ? 'checkOn' : 'checkOff';
              list[method](index);
              ctrl.checkedIndexes(list.getCheckedIndexList());
            }
          })
        ], item.getName());
      })
    ]);
  }
};
