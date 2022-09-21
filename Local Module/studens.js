const getName = () => {
  console.log("Taifur islam");
};

const getAge = () => {
  return 22;
};

// exports.cgpa = "3.73";

const cgpa = "3.73";

const user = {
  name: "TAifur",
  age: 21,
  userId: 101,
};

// exports.getName = getName;
// exports.getAge = getAge;
// exports.user = user;

module.exports = {
  getName,
  getAge,
  user,
  cgpa,
};
