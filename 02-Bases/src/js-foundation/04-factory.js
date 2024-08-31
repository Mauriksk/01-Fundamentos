const { getAge } = require("../plugins/get-age.plugin");
const { getId } = require("../plugins/get-id.plugin");

const obj = { name: "John", birthdate: "2000-02-08" };

const makeBuildPerson = ({ name, birthdate }) => {
  return {
    id: getId,
    name,
    birthdate,
    age: getAge(birthdate),
  };
};

const john = makeBuildPerson(obj);

console.log(john);
