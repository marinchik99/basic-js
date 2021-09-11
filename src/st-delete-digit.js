import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let a = String(n).split('');
  let b = String(n).split('').sort();
   a.splice(a.indexOf(b[0]),1);
  
  return Number(a.join(''));
}
