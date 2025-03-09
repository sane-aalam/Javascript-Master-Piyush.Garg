// DATA_TYPE
// var -> global scope
// let,const -> block scope
// const -> value re-assign is not possible

// let - local scope
// re-assign
// kahi bhi access kar lo

// 😇 #InterviewPreparation
// leetcode profile data-base
var userName = "piysuh.garg";
var gender = "male";
var location = "noida sector62";
let Birthday = "Jan 16,1991";
var summary = "First, solve the problem. Then, write the code. — John Johnson";
const fiexedSalary = 12000;
const TechnicalSkills = {
  id: 1,
  first_name: "Piyush",
  last_name: "Garg",
  email: "PiysuhGarg@cargocollective.com",
  gender: "male",
  Job_tittle: "Product Manager SDE",
};

// console.log(TechnicalSkills);
console.log(location);
// consider user shift new location
// update the current location with new location
location = "Noida sector 64A";
console.log(location);

// Let try to update the Let,const variable
Birthday = "Jan 17,2024";
console.log(Birthday);

// const (try to understand)
// TypeError: Assignment to constant variable.
fiexedSalary = 80000;
console.log(fiexedSalary);

// block - {}
if (true) {
  const updateSalary = "32000/-";
  console.log(fiexedSalary);
}

// updateSalary is not defined
console.log(updateSalary);
