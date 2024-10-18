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
    let decodedStr = '';

    for (let i = 0; i < expr.length; i += 10)  {
        let encodedLetter = expr.slice(i, i + 10);

        if(encodedLetter === '**********')  {
            decodedStr += ' ';
            continue;
        }

        let decodedLetter = encodedLetter.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '');
        decodedStr += MORSE_TABLE[decodedLetter];
    }
    return decodedStr;
}

module.exports = {
    decode
}