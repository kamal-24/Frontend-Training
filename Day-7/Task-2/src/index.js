let employee = {
  firstname: "Tony",
  lastname: "Parker",
  age: 22,
  role: "Marketing"
};
console.log("Employee Details:");
for (let key in employee) {
  console.log(key, "-", employee[key]);
}
console.log("Age property is being deleted", delete employee.age);
console.log("Check if age is still a property", employee.age);
