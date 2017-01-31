function rotate(character, number) {
    let characterNumber = character.charCodeAt() - 96;
    console.log(characterNumber, 'charNumb');
    let shift = number % 26;
    let newCharCode = characterNumber + shift;
    console.log(newCharCode);
    if (newCharCode > 26) {
        newCharCode = newCharCode % 26;
    }
    console.log('new', newCharCode);
    var newCharacter = String.fromCharCode(newCharCode + 96);
    console.log(character.charCodeAt() - 96, shift, newCharacter);
}

rotate('y', 1);
