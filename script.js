let vscode = document.getElementById("vscode");
let terminal = document.getElementById("terminal");
let spotify = document.getElementById("spotify");
let word = document.getElementById("word");
let upper = document.getElementById("upper");
let capitalize = document.getElementById("capitalize");
let sentence = document.getElementById("sentence");
let lower = document.getElementById("lower");
let footer = document.getElementById("footer");

footer.innerText = `AdrielDev - ${new Date().getFullYear()}`;

vscode.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "code",
  });
});

terminal.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "terminal",
  });
});

spotify.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "spotify",
  });
});

word.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "word",
  });
});

upper.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "upper",
  });
});

capitalize.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "capitalize",
  });
});

lower.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "lower",
  });
});

sentence.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "sentence",
  });
});
