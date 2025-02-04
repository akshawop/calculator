// selecting root
const root = document.querySelector(":root");

// theme settings on page reload
if (localStorage.getItem("theme")) {
  root.style.setProperty("--theme", localStorage.getItem("theme"));
  root.style.setProperty("--textcolor", localStorage.getItem("textcolor"));
}

// colors settings on page reload
localStorage.getItem("special");
root.style.setProperty("--special", localStorage.getItem("special"));

// theme modes switching function
function themes(id) {
  if (id === "light") {
    localStorage.setItem("theme", "white");
    localStorage.setItem("textcolor", "black");
    root.style.setProperty("--theme", localStorage.getItem("theme"));
    root.style.setProperty("--textcolor", localStorage.getItem("textcolor"));
  } else {
    localStorage.setItem("theme", "black");
    localStorage.setItem("textcolor", "white");
    root.style.setProperty("--theme", localStorage.getItem("theme"));
    root.style.setProperty("--textcolor", localStorage.getItem("textcolor"));
  }
}

// color wheel
let colorPicker = new iro.ColorPicker("#colorWheel", {
  width: 100,
  color: localStorage.getItem("special")
    ? localStorage.getItem("special")
    : "#ffffff",
  borderWidth: 1,
  borderColor: "#000",
});

// saving the custom color to local storage
colorPicker.on("color:change", function (color) {
  localStorage.setItem("special", color.hexString);
  root.style.setProperty("--special", color.hexString);
});

// colors switching function
function colors(value) {
  localStorage.setItem("special", value);
  root.style.setProperty("--special", value);
  colorPicker.color.set(value);
}
