var fs = require("fs");
const clipboardy = require("clipboardy");
var exec = require("child_process").exec;
const write = new console.Console(
  fs.createWriteStream("./logs.txt", { flags: "a" })
);

function sendMessage(msg) {
  var header = Buffer.alloc(4);
  header.writeUInt32LE(msg.length, 0);
  process.stdout.write(header);
  process.stdout.write(msg);
}

try {
  var data = fs.readFileSync(0, "binary");
  let json = Buffer.from(data.slice(4), "utf8").toString().replace(/\"/g, "");

  write.log(new Date(), "-", json);

  switch (json) {
    case "code":
      exec("code");
      break;
    case "spotify":
      exec("spotify");
      break;
    case "upper":
      let upper = clipboardy.readSync().toUpperCase();
      clipboardy.writeSync(upper);
      sendMessage(`{"callback": "${upper}"}`);
      break;
    default:
      write.log(json);
      break;
  }
} catch {
  console.log("Falhou");
}
