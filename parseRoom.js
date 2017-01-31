const fs = require('fs');
fs.readFile('./data.txt', 'utf-8', function(err, data) {
    let arrayitized = data.split('\n');
    let filtered = arrayitized.filter(realCheck);
    let numbers = filtered.reduce((acc, curr) => {
        acc += parseInt(curr.match(/(\d+)/)[1], 10);
        return acc;
    }, 0);
    console.log(numbers);

});

function realCheck(elem) {
    let freqObj = {};
    let [letters, keyCode] = elem.split('[');
    if (typeof keyCode === 'undefined') {
        return false;
    }
    letters = letters.replace(/[^a-z]/g, '');
    keyCode = keyCode.split(']')[0];
    for (let i = 0; i < letters.length; i++) {
        let currentCharacter = letters[i];
        if (freqObj[currentCharacter]) {
            freqObj[currentCharacter]++;
        } else {
            freqObj[currentCharacter] = 1;
        };
    };
    let keysSorted = Object.keys(freqObj).sort(function(a, b) {
        // more logic
        if (freqObj[a] === freqObj[b]) {
            if (a > b) {
                return -1;
            } else {
                return 1;
            }
        }
        return freqObj[a] - freqObj[b];
    }).reverse();
    let code = keysSorted.slice(0, 5).join('');
    return code === keyCode;
    // console.log(freqObj, keysSorted);
};
