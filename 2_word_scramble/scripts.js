function game(){
    var container = document.getElementById("container")
    container.style.display = "none";
    var popup = document.getElementById("popup")
    popup.style.display = "block"
}
function shuffle(string) {
    let arr = string.split('')
    arr.sort(()=>Math.random()-0.5)
    let result = arr.join('')
    return result
}
function display(){
    var container = document.getElementById("container")
    container.style.display = "block";
    var popup = document.getElementById("popup")
    popup.style.display = "none"
    var box1 = document.getElementById("box1");
    var words = ["history","economy","actress","development","acknowledge","classroom","chocolate","boyfriend"]
    var random = parseInt(Math.random()*(words.length))
    var word = words[random]
    var s = shuffle(word)
    for(let i=0; i<word.length; i++){
        var text_box = document.createElement("div")
        text_box.innerHTML = s.charAt(i)
        text_box.style.border = "2px solid black"
        text_box.style.padding = "2rem"
        text_box.style.background = "#05386B"
        box1.append(text_box)
    }
    var input = document.getElementById("input");
    var span = document.getElementById("result")
    input.addEventListener("keypress", (e) =>{
        if(e.key === "Enter"){
            let text = (input.value).toLowerCase()
            text = text.trim()
            if(text == word) span.innerHTML = "Right guess"
            else span.innerHTML = "Try again"
        }
    })
}