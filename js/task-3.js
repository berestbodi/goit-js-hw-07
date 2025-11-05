const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (ev) => {
  const userName = ev.target.value.trim();
  output.textContent = userName === "" ? "Anonymous" : userName;
});
