// selecting display screen element and creating new variable for calculation
const display = document.querySelector("#display-text");
let expression = "";


// function to show calculation on display screen, store them in the expression variable and some bug fixes
function showOnDisplay(element)
{
    // scrolls to the end line
    display.scrollTo(0, display.scrollHeight);
    
    if(element === "×" || element === "*")
    {
        if(!(expression.charAt(expression.length-1) === "*" || expression === ""))
        {
            display.innerText += element;
            expression += "*";
        }
    }
    else if(element === "÷" || element === "/")
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
        if(!(expression.charAt(expression.length-1) === element.toString()))
        {
            display.innerText += element;
            expression += element;
        }
    }
    else if(element === "+")
    {
        if(!(expression.charAt(expression.length-1) === element.toString() || expression.charAt(expression.length-1) === "-"))
        {
            display.innerText += element;
            expression += element;
        }
    }
    else if(element === "-")
    {
        if(!(expression.charAt(expression.length-1) === element.toString() || expression.charAt(expression.length-1) === "+"))
        {
            display.innerText += element;
            expression += element;
        }
    }
    else
    {
        if (display.innerText === "0") display.innerText = "";
        display.innerText += element;
        expression += element;
    }
}


// function to delete one item at a time from the display screen and the expression variable
function del()
{
    if (display.innerText.length == 1)
    {
        display.innerText = "0";
        expression = "";
    }
    else
    {
        let temp = display.innerText;
        display.innerText = temp.slice(0,temp.length-1);
        expression = expression.slice(0, expression.length-1);
    }
}


// function to solve the given expression with some error handling
function equalsOperation()
{
    // play meme
    if(display.innerText === "0÷0" || display.innerText === "0/0")
    {
        display.innerText = "";
        expression = "";
        playMeme();
        return;
    }

    // evaluate
    if(expression !== "" && expression !== "0")
    {
        let temp = "";
        try
        {
            temp = eval(expression);
            storeHistory();
            display.innerText = eval(expression);
            expression = display.innerText;
        }
        catch(err)
        {
            display.innerText = "Error";
            expression = "Error";
        }
    }
    else return;
}


// function to clear the display screen and empty the expression variable
function clearScreen()
{
    display.innerText = "0";
    expression = "";
    video.pause();
    video.style.display = "none";
}
