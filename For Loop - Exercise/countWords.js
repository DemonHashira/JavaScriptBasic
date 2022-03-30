function countWords(input) {
    let text = input[0];
    let countWords = 1;

    for (let i = 0; i < text.length; i++) {
        if(text[i] === " ")
        countWords++;
    }
    if (countWords > 10) {
        console.log(`The message is too long to be send! Has ${countWords} words.`)
    } else {
        console.log(`The message was sent successfully!`)
    }
}
countWords(["This message has ten words and you can send it!"])