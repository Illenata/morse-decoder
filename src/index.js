const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let keyInNumbers = '';
    let arrNumbers = [];
    let alphabet = [];   
    
    for(let key in MORSE_TABLE) {
        keyInNumbers = key.replace(/\./g, '10').replace(/\-/g, 11);
        arrNumbers.push(+keyInNumbers);   
    }
    
    for(let value of Object.values(MORSE_TABLE)) {
        alphabet.push(value);
    }

    let numbersToLettersMap = new Map();
    for(let i = 0; i < arrNumbers.length; i++) {
        numbersToLettersMap.set(arrNumbers[i], alphabet[i]);
    }
    
    let exprArr = [];
    
    for(let i = 0; i < expr.length / 10; i++) {
        exprArr.push(expr.substr(i * 10, 10));
    }
        
    let str = '';
    
    exprArr.forEach(item => {
        if (item == '**********') {
        
        str += ' ';
        } else {
            str += numbersToLettersMap.get(+item);
        }
    });

    return str;
}

module.exports = {
    decode
};
