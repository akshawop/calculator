// selecting root
const root = document.querySelector(":root");


// theme settings on page reload
if(localStorage.getItem("theme"))
{
    root.style.setProperty("--theme", localStorage.getItem("theme"));
    root.style.setProperty("--textcolor", localStorage.getItem("textcolor"));
}


// colors settings on page reload
localStorage.getItem("special") && root.style.setProperty("--special", localStorage.getItem("special"));


// theme modes switching function
function themes(id)
{
    if(id === "light")
    {
        localStorage.setItem("theme", "white");
        localStorage.setItem("textcolor", "black");
        root.style.setProperty("--theme", localStorage.getItem("theme"));
        root.style.setProperty("--textcolor", localStorage.getItem("textcolor"));
    }
    else
    {
        localStorage.setItem("theme", "black");
        localStorage.setItem("textcolor", "white");
        root.style.setProperty("--theme", localStorage.getItem("theme"));
        root.style.setProperty("--textcolor", localStorage.getItem("textcolor"));
    }
}


// colors switching function
function colors(id)
{
    localStorage.setItem("special", id)
    root.style.setProperty("--special", id);
}
