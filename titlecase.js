function titleCase(string) {
  let newString = string.toLowerCase().split(" ");

  for (let i = 0; i < newString.length; i++) {
    newString[i] =
      newString[i][0].toUpperCase() + newString[i].slice(1);
  }

  return newString.join(" ");
}

console.log(titleCase("I like to code"));