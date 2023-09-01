'use strict';

/**
 * @brief 判断一个字符是否为字母
 */
function isLetter(c) {
  if (typeof c !== 'string') {
    return false;
  }
  /**
   * @todo 为什么只判断位置 0，因为传入的 c 只有一个字符
   */
  var code = c.charCodeAt(0);
  // letter = "A" … "Z" | "a" … "z"
  return (code >= 0x41 && code <= 0x5a ||
    code >= 0x61 && code <= 0x7a);
}

/**
 * @brief 判断一个字符是否为数字
 */
function isDecimalDigit(c) {
  if (typeof c !== 'string') {
    return false;
  }
  // decimalDigit = "0" … "9"
  var code = c.charCodeAt(0);
  return code >= 0x30 && code <= 0x39;
}

module.exports = {
  isLetter,
  isDecimalDigit
};
