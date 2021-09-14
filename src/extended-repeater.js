import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {

  if (!options.separator) {
      options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|'
  }  
  if (options.addition === undefined) {
    options.addition = '';
  }   
  let addit = '', res = '';
  for (let i=1; i<options.additionRepeatTimes; i++){
    addit += options.addition+options.additionSeparator;
  }
   addit += options.addition;
   for (let i=1; i<options.repeatTimes; i++){
     res += str+addit + options.separator;
   }
   res += str + addit;
   return res;
}
