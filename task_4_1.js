function ownKeyCheck(objectToCheck){
  for (let key in objectToCheck){
    if (objectToCheck.hasOwnProperty(key)){
      console.log(`Key: ${key} Value: ${objectToCheck[key]}`)
    }
  }
}

const person = {
 city: "Moscow"
}

const student = Object.create(person);

student.ownCity = "Piter";

ownKeyCheck(student);
