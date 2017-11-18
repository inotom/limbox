class CheckList {
  constructor(max) {
    this._max = max;
    this._list = [];
    this._checkedIndexList = [];
  }

  add(check) {
    this._list.push(check);
  }

  checkOn(index) {
    if (this._checkedIndexList.length >= this._max) {
      this._list[this._checkedIndexList[0]].off();
      this._checkedIndexList.shift();
    }
    this._checkedIndexList.push(index);
    this._list[index].on();
    return this;
  }

  checkOff(index) {
    let deleteIndex = -1;
    for (let i = 0, len = this._checkedIndexList.length; i < len; i++) {
      if (index === this._checkedIndexList[i]) {
        deleteIndex = i;
        break;
      }
    }
    if (deleteIndex >= 0) {
      this._checkedIndexList.splice(deleteIndex, 1);
    }
    this._list[index].off();
    return this;
  }

  getAll() {
    return this._list;
  }

  getCheckedIndexList() {
    return this._checkedIndexList;
  }

  static create(max) {
    return new CheckList(max);
  }
}

export default CheckList;
