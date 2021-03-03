const fs = require("fs");
const path = require("path");

const file = path.join(process.cwd(), "supercomponent.min.js");
let data = fs.readFileSync(file).toString();
data = data.replace(/\;$/gm, ".default;");
fs.writeFileSync(file, data);