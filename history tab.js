const historyTab = document.querySelector(".history-tab");
const keypad = document.querySelector(".keypad");
const clrHistoryButton = document.querySelector("#clear-history");

function historyTabToggle()
{
    if(historyTab.style.minHeight === "")
    {
        historyTab.style.minHeight = "54dvh";
        clrHistoryButton.style.display = "flex";
        setTimeout(() => keypad.style.display = "none" , 700);
        
    }
    else
    {
        historyTab.style.minHeight = "";
        clrHistoryButton.style.display = "none";
        keypad.style.display = "grid";
    }
    historyTab.scrollTo(0, historyTab.scrollHeight);
}

if(localStorage.getItem("counter"))
{
    historyTab.innerText = "";
    let limit = Number(localStorage.getItem("counter"));
    for(let k=1; k<=limit; k++)
        historyTab.innerHTML += localStorage.getItem(k);
}

let i;
localStorage.getItem("counter") ? i = Number(localStorage.getItem("counter")) : i = 0;

function storeHistory()
{
    i++;
    historyItem = `<span id=\"equation\" title=${expression} onclick=\"accessHistory(this.innerText, this.title);\">${display.innerText}<br><span id=\"result\">=${eval(expression)}</span></span><br>`;
    historyTab.innerText === "No history" ? historyTab.innerHTML = historyItem : historyTab.innerHTML += historyItem;
    localStorage.setItem(i, historyItem);
    localStorage.setItem("counter", i);
}

function accessHistory(displayValue, realValue)
{
    displayValue = displayValue.slice(0, displayValue.indexOf("="));
    display.innerText = displayValue;
    expression = realValue;
    historyTabToggle();
}

function clearHistory()
{
    historyTab.innerHTML = "No history";
    let theme = localStorage.getItem("theme");
    let font = localStorage.getItem("font");
    let special = localStorage.getItem("special");
    localStorage.clear();
    localStorage.setItem("theme", theme);
    localStorage.setItem("font", font);
    localStorage.setItem("special", special);
}