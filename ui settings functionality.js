// selecting root
const root = document.querySelector(":root");


// theme settings on page reload
if(localStorage.getItem("theme"))
{
    root.style.setProperty("--theme", localStorage.getItem("theme"));
    root.style.setProperty("--font", localStorage.getItem("font"));
}


// colors settings on page reload
localStorage.getItem("special") && root.style.setProperty("--special", localStorage.getItem("special"));


// theme modes switching function
function themes(id)
{
    if(id === "light")
    {
        localStorage.setItem("theme", "white");
        localStorage.setItem("font", "black");
        root.style.setProperty("--theme", localStorage.getItem("theme"));
        root.style.setProperty("--font", localStorage.getItem("font"));
    }
    else
    {
        localStorage.setItem("theme", "black");
        localStorage.setItem("font", "white");
        root.style.setProperty("--theme", localStorage.getItem("theme"));
        root.style.setProperty("--font", localStorage.getItem("font"));
    }
}


// colors switching function
function colors(id)
{
    localStorage.setItem("special", id)
    root.style.setProperty("--special", id);
}
