//Phrase to convert to whale speake.
let input = "turpentine and turtles";

//Whales only speak in vowels so here is an array to hold those for converting purpose.
var vowels = ["a", "e", "i", "o", "u"];

//Where the actual converted phrase will be stored.
let resultArray = [];

//An array to iterate over each letter in the input variable.
for (let i = 0; i < input.length; i++) {
    const letter = input[i];
//    console.log(i);
    for (let j = 0; j < vowels.length; j++) {
        const foundVowel = vowels[j];
 //       console.log(j);
        if (letter === foundVowel) {
            console.log(foundVowel);
        }
        
    }
}
