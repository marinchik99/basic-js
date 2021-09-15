import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
}
encrypt(message, key) {
    if (message == undefined || key == undefined) {
    throw new Error('Incorrect arguments!');}
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = '';
    let num = 0;
    for (let i = 0; i < message.length; i++) {
        if (str.includes(message.toUpperCase()[i])) {
            res += str[((str.indexOf(message.toUpperCase()[i]) + str.indexOf(key.toUpperCase()[num % key.length]) + 26) % 26)];
            num += 1;
        } else {
            res += message[i];
        }
    }
    return this.direct ? res : res.split('').reverse().join('');

}
decrypt(encryptedMessage, key) {
    if (encryptedMessage == undefined || key == undefined){
    throw new Error('Incorrect arguments!');} 
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let res = ''; let num = 0;   
    for (let i = 0; i < encryptedMessage.length; i++) {
        if (str.includes(encryptedMessage.toUpperCase()[i])) {
            res += str[((str.indexOf(encryptedMessage.toUpperCase()[i]) - str.indexOf(key.toUpperCase()[num % key.length]) + 26) % 26)];
            num +=1;
        } else {
            res += encryptedMessage[i];
        }
    }
    return this.direct ? res : res.split('').reverse().join('');
}

}
