function emptyObject(){
  return Object.create(null);
}

student3 = emptyObject()
console.log(Object.getPrototypeOf(student3));
console.log(student3);
