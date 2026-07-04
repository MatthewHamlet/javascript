function repeatStringNumTimes (string, number){
  let store = ""
  for(let i = 0; i < number; i++){
    store += string
  }
  return store
}

console.log(repeatStringNumTimes("*", 3))