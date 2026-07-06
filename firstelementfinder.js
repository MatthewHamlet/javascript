function findElement(array, functions){
  for(let i of array){
    if(functions(i) === true){
      return i
    }
  }
}
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))