const keyboardLayout = {
    '1': '-', '2': '1', '3': '2', '4': '3', '5': '4', '6': '5', '7': '6', '8': '7', '9': '8', '0': '9',
    'q': 'p', 'w': 'q', 'e': 'w', 'r': 'e', 't': 'r', 'y': 't', 'u': 'y', 'i': 'u', 'o': 'i', 'p': 'o',
    'a': 'l', 's': 'a', 'd': 's', 'f': 'd', 'g': 'f', 'h': 'g', 'j': 'h', 'k': 'j', 'l': 'k',
    'z': ',', 'x': 'z', 'c': 'x', 'v': 'c', 'b': 'v', 'n': 'b', 'm': 'n',
    ',': 'm', '.': ',', ';': 'l', '/': '.',

    'Q': 'P', 'W': 'Q', 'E': 'W', 'R': 'E', 'T': 'R', 'Y': 'T', 'U': 'Y', 'I': 'U', 'O': 'I', 'P': 'O',
    'A': 'L', 'S': 'A', 'D': 'S', 'F': 'D', 'G': 'F', 'H': 'G', 'J': 'H', 'K': 'J', 'L': 'K',
    'Z': '<', 'X': 'Z', 'C': 'X', 'V': 'C', 'B': 'V', 'N': 'B', 'M': 'N',
    '<': 'M', '>': ',', ':': 'L', '?': '.'
};



function getLeftChar(ch) {
    return keyboardLayout[ch] || null;
}

// Encryption function
function encryptText() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = '';
    console.log('Input Text:', inputText);

    for (let char of inputText) {
        const leftChar = getLeftChar(char);
        if (leftChar) {
            const newCharAscii = encryptedText.length + leftChar.charCodeAt(0);
            encryptedText += String.fromCharCode(newCharAscii);
        } else {
            encryptedText += char;
        }
    }

    console.log('Encrypted Text:', encryptedText);
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = '';
    console.log('Input Text for Decryption:', inputText);

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText[i];
        const decryptedCharAscii = char.charCodeAt(0) - i;
        const decryptedChar = String.fromCharCode(decryptedCharAscii);

        const originalChar = Object.keys(keyboardLayout).find(key => keyboardLayout[key] === decryptedChar);
        
        if (originalChar) {
            decryptedText += originalChar;
        } else {
            decryptedText += char; 
        }
    }

    console.log('Decrypted Text:', decryptedText);
    document.getElementById('outputText').value = decryptedText;
}


console.log('Script Loaded');
