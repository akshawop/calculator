let root = document.querySelector(":root");
function lightDefaultTheme()
{
    root.style.setProperty("--theme", "white");
    root.style.setProperty("--font", "black");
    root.style.setProperty("--special", "green");
}

function darkDefaultTheme()
{
    root.style.setProperty("--theme", "black");
    root.style.setProperty("--font", "white");
    root.style.setProperty("--special", "green");
}

function lightBlueTheme()
{
    root.style.setProperty("--theme", "white");
    root.style.setProperty("--font", "black");
    root.style.setProperty("--special", "royalblue");
}

function darkBlueTheme()
{
    root.style.setProperty("--theme", "black");
    root.style.setProperty("--font", "white");
    root.style.setProperty("--special", "royalblue");
}

function lightOrangeTheme()
{
    root.style.setProperty("--theme", "white");
    root.style.setProperty("--font", "black");
    root.style.setProperty("--special", "orange");
}

function darkOrangeTheme()
{
    root.style.setProperty("--theme", "black");
    root.style.setProperty("--font", "white");
    root.style.setProperty("--special", "orange");
}

let display=document.querySelector("span");
let expression = "";
function showOnDisplay(element)
{
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

function clearScreen()
{
    display.innerText = "";
    expression = "";
}

function del()
{
    let temp = display.innerText;
    display.innerText = temp.slice(0,temp.length-1);
    expression = expression.slice(0, expression.length-1);
}

function equalsOperation()
{
    try
    {
        display.innerText = eval(expression);
    }
    catch(err)
    {
        display.innerText = "Error";
    }
    expression = "";
}