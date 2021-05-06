var fs = require("fs");
var exec = require("child_process").exec;
const write = new console.Console(fs.createWriteStream("./logs.txt"));

try {
  var std = fs.readFileSync(0, "binary");
  let data = Buffer.from(std.slice(4), "utf8").toString().replace(/\"/g, "");

  switch (data) {
    case "code":
      exec("code");
      break;
    case "spotify":
      exec("spotify");
      break;
    default:
      write.log(data);
      break;
  }
} catch (err) {
  console.log(err);
}
