//Phrase to convert to whale speake.
let input = "turpentine and turtles";

//Whales only speak in vowels so here is an array to hold those for converting purpose.
var vowels = ["a", "e", "i", "o", "u"];

//Where the actual converted phrase will be stored.
let resultArray = [];

//Join the resultArray.

//An array to iterate over each letter in the input variable.
for (let i = 0; i < input.length; i++) {
    const letter = input[i].toLowerCase();
    if (letter === 'e' || letter === 'u'){
        resultArray.push(letter);
    }
//    console.log(i);
    for (let j = 0; j < vowels.length; j++) {
        const foundVowel = vowels[j];
 //       console.log(j);
        if (letter === foundVowel) {
            resultArray.push(foundVowel);
        }
        
    }

}
//console.log(resultArray);

//Take the vowels in resultArray variable and join them and make them all upper case.
var resultString = resultArray.join('').toUpperCase();

console.log(resultString);

