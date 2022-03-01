const fs = require("fs");
const dataRead = fs.readFileSync("data.json");
const data = JSON.parse(dataRead);
var a = []
for (var i = 0; i < data.length; i++) {
  a.push(data[i].discordID)
}
console.log(a)
