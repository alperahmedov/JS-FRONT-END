function solve(text, word) {
    const censoredword = "*".repeat(word.length);
    let censoredtext = text;

    while (censoredtext.includes(word)) {
        censoredtext = censoredtext.replace(word, censoredword);
    }
    
    console.log(censoredtext);

}

solve('A small sentence with small some words small', 'small');