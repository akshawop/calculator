//selecting root
let root = document.querySelector(":root");

//theme settings on page reload
if(localStorage.getItem("theme"))
{
    root.style.setProperty("--theme", localStorage.getItem("theme"));
    root.style.setProperty("--font", localStorage.getItem("font"));
}

//theme modes switching function
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

//colors settings on page reload
localStorage.getItem("special") && root.style.setProperty("--special", localStorage.getItem("special"));

//colors switching function
function colors(id)
{
    localStorage.setItem("special", id)
    root.style.setProperty("--special", id);
}

//selecting display screen element and creating new variable for calculation
let display=document.querySelector("#display-text");
let expression = "";

//function to show calculation on display screen, store them in the expression variable and some bug fixes
function showOnDisplay(element)
{
    //scrolls to the end line
    display.scrollTop = display.scrollHeight;
    
    if(element === "×")
    {
        if(!(expression.charAt(expression.length-1) === "*" || expression === ""))
        {
            display.innerText += element;
            expression += "*";
        }
    }
    else if(element === "÷")
    {
        if(!(expression.charAt(expression.length-1) === "/" || expression === ""))
        {
            display.innerText += element;
            expression += "/";
        }
    }
    else if(element === "%")
    {
        if(!(display.innerText.charAt(display.innerText.length-1) === element.toString() || expression === ""))
        {
            display.innerText += element;
            expression += "/100";
        }
    }
    else if(element === ".")
    {
        if(!(expression.charAt(expression.length-1) === element.toString() || expression === ""))
        {
            display.innerText += element;
            expression += element;
        }
    }
    else if(element === "+")
    {
        if(!(expression.charAt(expression.length-1) === element.toString() || expression === ""))
        {
            display.innerText += element;
            expression += element;
        }
    }
    else if(element === "-")
    {
        if(!(expression.charAt(expression.length-1) === element.toString() || expression === ""))
        {
            display.innerText += element;
            expression += element;
        }
    }
    else
    {
        display.innerText += element;
        expression += element;
    }
}

//function to clear the display screen and empty the expression variable
function clearScreen()
{
    display.innerText = "";
    expression = "";
}

//function to delete one item at a time from the display screen and the expression variable
function del()
{
    let temp = display.innerText;
    display.innerText = temp.slice(0,temp.length-1);
    expression = expression.slice(0, expression.length-1);
}

//function to solve the given expression with some error handling
function equalsOperation()
{
    try
    {
        display.innerText = eval(expression);
        expression = display.innerText;
    }
    catch(err)
    {
        display.innerText = "Error";
        expression = "Error";
    }
    }
