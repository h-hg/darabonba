'use strict';

class Env {
  /**
   * @param preEnv 保存上一个环境变量，感觉应该是上下文
   */
  constructor(preEnv) {
    this.preEnv = preEnv;
    this.map = new Map();
  }

  set(key, value) {
    this.map.set(key, value);
  }

  has(key) {
    return this.map.has(key);
  }

  hasDefined(key) {
    if (this.map.has(key)) {
      return true;
    }

    if (this.preEnv) {
      return this.preEnv.hasDefined(key);
    }

    return false;
  }

  get(key) {
    if (this.map.has(key)) {
      return this.map.get(key);
    }

    if (this.preEnv) {
      return this.preEnv.get(key);
    }

    return null;
  }
}

module.exports = Env;
