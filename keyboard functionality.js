// defining the valid keys to be pressed
const validKeys = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  ".",
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
];

// Event listener for key press
document.addEventListener("keydown", (event) => {
  if (validKeys.includes(event.key)) showOnDisplay(event.key);
  else if (event.key === "Delete") clearScreen();
  else if (event.key === "Backspace") del();
  else if (event.key === "Enter") equalsOperation();
  else if (event.key === "h" || event.key === "H")
    document.getElementById("history-icon").onclick();
});
