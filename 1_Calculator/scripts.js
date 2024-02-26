function calculate(){
    let result = document.getElementById("result")

    const keys = document.querySelector(".container");
    let text = ""
    keys.addEventListener("click", e=>{
        let exp = /([A-Z%=])/;
        let exp1 = /([0-9]*\/[0-9]*)\w+/g
        let val = e.target.value
        if(val && !exp.test(val))   result.innerHTML += val
        else if(val === '=')    result.innerHTML = eval(result.innerHTML)
        else if(val == 'AC') result.innerHTML = ""
        else if(val == 'DE') result.innerHTML = result.innerHTML.slice(0, -1)
        else if(val == '%'&&  exp1.test(result.innerHTML)) result.innerHTML = Number(eval(result.innerHTML))*100
    })
}