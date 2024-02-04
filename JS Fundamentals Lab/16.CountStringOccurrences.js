function counterapp(text, word) {
    let counter = 0;
    const words = text.split(" ");

    for (let index = 0; index < words.length; index++) {
        if (words[index] === word){
            counter++;
        }
    }
    console.log(counter);

}

counterapp('This is a word and it also is a sentence', 'is');

function solve(text, word) {
    const filteredArray = text.split(" ").filter(function(element) {
        return element === word;
    });
    console.log(filteredArray.length);
}

solve('This is a word and it also is a sentence', 'is');