function getAverage (array){
  let sum = 0
  for(let i of array){
    sum += i
  }
  return sum/(array.length)
}

function getGrade (score){
  if(score === 100){
    return "A+"
  }else if(score >=90){
    return "A"
  }else if(score >=80){
    return "B"
  }else if(score >=70){
    return "C"
  }else if(score >=60){
    return "D"
  }else{
    return "F"
  }
}
function hasPassingGrade(score){
  let check = getGrade(score)
  return check !== "F"
}

function studentMsg (array, score){
  let average = getAverage(array)
  let grade = getGrade(score)
  let pass = hasPassingGrade(score)
  if(pass){
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
  }else{
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))