function checkProperty(checkProperty, objectToCheck){
  if (objectToCheck[checkProperty]){
      return true
  } else {
    return false
  }
}

const person = {

 city: "Moscow"

}

const student = Object.create(person);

student.ownCity = "Piter";

console.log(checkProperty('ownCity', student))
console.log(checkProperty('city', student))
console.log(checkProperty('City', student))
