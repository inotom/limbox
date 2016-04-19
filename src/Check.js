class Check {
  constructor(name) {
    this._name = name;
    this._state = false;
  }

  off() {
    this._state = false;
    return this;
  }

  on() {
    this._state = true;
    return this;
  }

  getName() {
    return this._name;
  }

  getState() {
    return this._state;
  }

  static create(name) {
    return new Check(name);
  }
}

export default Check;
