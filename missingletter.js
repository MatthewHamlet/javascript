function fearNotLetter (string){
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let index = alphabet.indexOf(string[0])
  let secondIndex = 0
  for(let i = index; i < alphabet.length; i++){
    if(string[secondIndex] !== alphabet[i]){
      return alphabet[i]
    }
    secondIndex++
  }
}

console.log(fearNotLetter("abce"))