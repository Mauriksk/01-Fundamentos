const fs = require("fs")

const data = fs.readFileSync("01-Fundamentos/README.md", "utf8")

const wordCount = data.split(" ").length;
const reactCount = data.split(/React/gi).length;
console.log("Palabras: ", wordCount)
console.log("Palabras: ", reactCount)