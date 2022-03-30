function oldLibrart (input) {
    let neededBook = input[0];
    let bookIsFound = false
    let index = 1
    let book = input[index];
    
    while (book !== "No More Books") {
        if (book === neededBook) {
            bookIsFound = true;
            break;
        }
        index++
        book = input[index]
    }
    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${index - 1} books.`)
    } else {
        console.log(`You checked ${index - 1} books and found it.`)
    }
}
oldLibrart(["Troy",
"Stronger",
"Life Style",
"Troy"])
