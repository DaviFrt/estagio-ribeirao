function reverseWord(word) {
  const wordLetter = word[0]
  let newWord = ""

  for(let i = word.length - 1; i>=0; i--) {
    newWord += word[i]
  }

  console.log(newWord)
}

reverseWord("Palavra")
reverseWord("Lindamente")