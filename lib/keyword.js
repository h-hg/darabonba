'use strict';

class Keyword {
  /**
   * 
   * @param {*} lexeme 表示 token 的文本
   * @param {*} tag 表示 token 对应的 tag，见 tag.js
   */
  constructor(lexeme, tag) {
    this.lexeme = lexeme;
    this.tag = tag;
  }
}

module.exports = Keyword;
