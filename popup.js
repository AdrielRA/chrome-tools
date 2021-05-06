let vscode = document.getElementById("vscode");
let eclipse = document.getElementById("eclipse");
let spotify = document.getElementById("spotify");
let slack = document.getElementById("slack");

vscode.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "code",
  });
});

eclipse.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "eclipse",
  });
});

spotify.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    type: "run",
    value: "spotify",
  });
});
