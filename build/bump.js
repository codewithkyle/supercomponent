const fs = require("fs");
const path = require("path");

const readme = path.join(process.cwd(), "readme.md");
const pkg = require(path.join(process.cwd(), "package.json"));

let data = fs.readFileSync(readme).toString();
data = data.replace(/(pubsub\@\d+\.\d+\.\d+)/g, `pubsub@${pkg.version}`);
fs.writeFileSync(readme, data);