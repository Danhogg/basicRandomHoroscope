/*
 Generates a random number between 0 and a (value - 1) of your choosing.
 The number being between 0 and value - 1 is important as index in an array
 starts at 0
*/
function randomNumberGenerator(value) {
    let randomNumber = Math.floor(Math.random() * value)
    return randomNumber
}

const horoscropeWisdom = {
    firstArray: ['The moon sign', 'The sun sign', 'The water sign', 'The fire sign'],
    secondArray: ['has bad luck', 'has good luck', 'has great riches', 'has a terrible event'],
    thirdArray: ['in their future', 'on the way', 'in a next life', 'coming tomorrow']
}

function generateRandomString() {
  
}
