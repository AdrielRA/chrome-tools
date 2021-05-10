var fs = require("fs");
const clipboardy = require("clipboardy");
var exec = require("child_process").exec;
const write = new console.Console(
  fs.createWriteStream("./logs.txt", { flags: "a" })
);

const read = () => {
  try {
    return Buffer.from(fs.readFileSync(0, "binary").slice(4), "utf8")
      .toString()
      .replace(/\"/g, "");
  } catch (err) {
    write.log(new Date(), "-", "ERROR:", err.message);
    return undefined;
  }
};

const sendMessage = (msg) => {
  var header = Buffer.alloc(4);
  header.writeUInt32LE(msg.length, 0);
  process.stdout.write(header);
  process.stdout.write(msg);
};

let json = read();

write.log(new Date(), "-", json);

switch (json) {
  case "code":
    exec("code");
    break;
  case "spotify":
    exec("cmd spotify");
    break;
  case "terminal":
    exec("wt");
    break;
  case "word":
    exec(
      'cmd /C "C:/Program Files/Microsoft Office/root/Office16/WINWORD.EXE"'
    );
    break;
  case "upper":
    let upper = clipboardy.readSync().toUpperCase();
    clipboardy.writeSync(upper);
    sendMessage(`{"callback": "${upper}"}`);
    break;
  case "sentence":
    let sentence = clipboardy.readSync().toLowerCase();
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    clipboardy.writeSync(sentence);
    sendMessage(`{"callback": "${sentence}"}`);
    break;
  case "capitalize":
    let capitalize = clipboardy
      .readSync()
      .toLowerCase()
      .replace(/\b\w/g, (l) => l.toUpperCase());
    clipboardy.writeSync(capitalize);
    sendMessage(`{"callback": "${capitalize}"}`);
    break;
  case "lower":
    let lower = clipboardy.readSync().toLowerCase();
    clipboardy.writeSync(lower);
    sendMessage(`{"callback": "${lower}"}`);
    break;
  default:
    if (json) write.log(json);
    break;
}
