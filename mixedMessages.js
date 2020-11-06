/*
 Generates a random number between 0 and a (value - 1) of your choosing.
 The number being between 0 and value - 1 is important as index in an array
 starts at 0
*/
function randomNumberGenerator(value) {
    let randomNumber = Math.floor(Math.random() * value)
    return randomNumber
}

function randomString() {
    const firstArray = ['In your future', 'Coming up in your life', 'There will be'];
    let randNumber1 = randomNumberGenerator(3)
    let randString1 = firstArray[randNumber1];
    const secondArray = []
    let randNumber2 = randomNumberGenerator(3)
    let randString2 = secondArray[randNumber2]
}
