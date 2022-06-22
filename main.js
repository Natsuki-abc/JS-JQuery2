const result = document.getElementById('result');
const button = document.getElementById('button');
const math = document.getElementById('math')

function clickButton(button){
    let number = button.innerHTML;
    
    if (number == "AC"){
        result.innerHTML = "0"
    } else if (number == "="){
        result.innerHTML = eval(result.innerHTML)
    } else{
        if (result.innerHTML == "0"){
            result.innerHTML = number
        } else if (result.innerHTML.slice(-1) == "+" || result.innerHTML.slice(-1) == "-" || result.innerHTML.slice(-1) == "*" || result.innerHTML.slice(-1) == "/" && (number == "+" || number == "-" || number == "*" || number == "/") ){
            const m = result.innerHTML.slice(0, -1)
            result.innerHTML = m + number
        } else{
            result.innerHTML += number
        }
    }
};
