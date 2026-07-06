function pyramid (string, rows, boolean){
  let starz = "\n"
  if(boolean === true){
    for (let i = rows; i >= 1; i--) {
    let spaces = " ".repeat(rows - i);
    let stars = string.repeat(2 * i - 1);
    starz += spaces + stars + "\n"
    }
  }else{
    for (let i = 1; i <= rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = string.repeat(2 * i - 1);
    starz += spaces + stars + "\n"
    }
  }
  return starz
}

console.log(pyramid("o", 4, true))