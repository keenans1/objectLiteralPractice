var person = {
  name: "John",
  height: "70 in",
  weight: 130,
  sex: "m",
}

console.log(person);

var title1 = Object.keys(person)[0];
var title2 = Object.values(person)[0];

var keyValue = (`${title1} ${title2}`);

console.log(keyValue);

person.age = 30;
person.bald = true;

console.log(Object.keys(person));


// var firstName = "Keenan";
// var lastName = "Southall";
//
// var fullName = (`${firstName} ${lastName}`);
//console.log(fullName);
