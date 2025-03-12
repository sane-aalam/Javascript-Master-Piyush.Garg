// 😇 #InterviewPreparation
// leetcode profile data-base
var userName = "piysuh.garg";
var gender = "male";
var location = "noida sector62";
let Birthday = "Jan 16,1991";
var summary = "First, solve the problem. Then, write the code. — John Johnson";
const fiexedSalary = 12000;
let nickName = ["Piyush", "Chiku", "Tomo"];
let solvedPTOD = true;
const TechnicalSkills = {
  id: 1,
  first_name: "Piyush",
  last_name: "Garg",
  email: "PiysuhGarg@cargocollective.com",
  gender: "male",
  Job_tittle: "Product Manager SDE",
};

console.log(typeof userName);
console.log(typeof gender);
console.log(typeof location);
console.log(typeof nickName);
console.log(typeof TechnicalSkills);
console.log(typeof fiexedSalary);
console.log(typeof solvedPTOD);

// Todo_Schema_Degisn
// Validation of user gives
// referencing User model to connect [in-memory data-base we have to create]

// inmemory-container
var TODO_CONTAINER = [];
var TODO_DELETE = true;

var text = "solve the problem";
var completed = true;

if (typeof text && typeof completed) {
  var todo1 = {
    text: text,
    completed: completed,
  };
  console.log("<valid>");
  TODO_CONTAINER.push(todo1);
} else {
  if (TODO_DELETE == true) {
    TODO_CONTAINER.pop();
  }
}

console.log("<execute code>");
console.log(TODO_CONTAINER);
