const dateOfBirth = "2001-01-13T00:00:00.000Z"

const formatDate = (date) => {
    const newDate = new Date(date)
      .toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC"
      })
      .replaceAll(" ", "-");
    return newDate.toUpperCase();
  };

console.log(  formatDate(dateOfBirth))

console.log(dateOfBirth)
















//const buildLogger = require("./plugins/logger.pluggin")

// const logger = buildLogger("app.js")

// logger.log("Hola Mauri")
// logger.error("Error papi")

// const { getPokemonById } = require("./js-foundation/05-promises");

// getPokemonById(1)
//   .then((pokemon) => console.log(pokemon))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Finalmente"));

//const { emailTemplate } = require("./js-foundation/01-template");
//require("./js-foundation/02-destructuring")

// const { getUserById } = require("./js-foundation/03-callbacks");
//const { buildPerson } = require("./js-foundation/04-factory");

// const id = 2;

// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error);
//   }

//   console.log(user);
// });

// const { getAge } = require("./plugins/get-age.plugin");
// const { getId } = require("./plugins/get-id.plugin");

// const makePerson = buildPerson({ getAge, getId });

// const johnData = { name: "John", birthdate: "2000-02-08" };

// const john = makePerson(johnData);

// console.log(john);
