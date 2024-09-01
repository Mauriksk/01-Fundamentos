



const buildPerson = ({ getAge, getId }) => {
  return ({ name, birthdate }) => {
    return {
      id: getId(),
      name,
      birthdate,
      age: getAge(birthdate),
    };
  };
};


module.exports = {
    buildPerson,
}
