function importHTML(file, parentId) {
  fetch(file)
  .then(response => response.text())
  .then(html => document.getElementById(parentId)
  .insertAdjacentHTML("afterbegin", html))
}
let script = document.currentScript;
importHTML(script.getAttribute("file"), script.getAttribute("parent-id"));