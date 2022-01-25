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


const BLOCK_LEN = 10;
const SUBBLOCK_LEN = 2;
const SPACE = '*';

const ELEMENTS = {
    '00': '',
    '10': '.',
    '11': '-',
};


function decodySymbol(encodedSymbol, groupLen) {
    if (encodedSymbol[0] == SPACE){
        return ' ';
    }

    let decoded = [];
    for (let i = 0; i < encodedSymbol.length; i += groupLen){
        decoded.push(ELEMENTS[encodedSymbol.substr(i, groupLen)]);
    }
    return MORSE_TABLE[decoded.join('')];
}


function decode(expr) {
    let res = [];
    for (let i = 0; i <= expr.length; i += BLOCK_LEN){
        res.push(decodySymbol(expr.substr(i, BLOCK_LEN), SUBBLOCK_LEN));
    }
    return res.join('');
}

module.exports = {
    decode
}