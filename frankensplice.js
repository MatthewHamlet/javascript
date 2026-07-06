function frankenSplice(array, array2, index){
  let newArray = [...array2]
  for(let i = array.length-1; i >= 0; i--){
    newArray.splice(index, 0, array[i])
  }
  return newArray
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))