function countVowels(Sentence){
    let count = 0;
    const newSentence = Sentence.toLowerCase();
    for(const letter of newSentence){
    if(letter.includes('a') || letter.includes('e') || letter.includes('i') || letter.includes('o') || letter.includes('u')){
        count++;
    }
}   
    return count;
}


const sentence = "My brother's name is Fahad Ahmed";
console.log(countVowels(sentence))