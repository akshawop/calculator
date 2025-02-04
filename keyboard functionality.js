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
  switch (event.key) {
    case "Delete":
      clearScreen();
      break;
    case "Backspace":
      del();
      break;
    case "Enter":
      equalsOperation();
      break;
    case "h":
    case "H":
      document.getElementById("history-icon").onclick();
      break;
    default:
      if (validKeys.includes(event.key)) showOnDisplay(event.key);
      break;
  }
});
