import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (Array.isArray(arr) === false){
  throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  let array = [...arr];
  for (let i = 0; i<array.length; i++){
    if (array.includes('--discard-next') === true){
      let a = array.indexOf('--discard-next');
      if (array[a+2]==='--double-prev'){
        array.splice(a,2,array[a+1]);
      }
      if(a === 0){
        array.splice(a,1);
      } else {
        array.splice(a,2);
      } 
    } else if (array.includes('--double-next') === true){
      let a = array.indexOf('--double-next');
      if(a === array.length-1){
        array.splice(a,1);
      } else {
        array.splice(a,1,array[a+1]);
      }
    } 
     else if (array.includes('--discard-prev') === true){
      let a = array.indexOf('--discard-prev');
      if (arr[a-2]==='--double-next'){
        array.splice(array[a-3],3,array[a-1],array[a+1]);
      }
      if(a === 0){
        array.splice(a,1);
      } else {
          array.splice(array[a-1],1);
      }
    }
   
    else if (array.includes('--double-prev') === true){
      let a = array.indexOf('--double-prev');
      if(a === 0){
        array.splice(a,1);
      } else {
        array.splice(a,1,array[a-1]);
      } 
    }  
  }
  return array;
}

