const fs = require("fs")

const data = fs.readFileSync("01-Fundamentos/README.md", "utf-8")

const newData = data.replace(/React/ig, "Angular")

fs.writeFileSync("README-Angular.md", newData)