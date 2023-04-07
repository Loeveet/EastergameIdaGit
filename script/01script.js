const imagenav = document.getElementById("mynav")
addSidePicture()
let counter = 0
let riddle = "En man hade fyra söner, och varje son hade en syster. Hur många barn hade mannen?"
let clue = "Räkna noga. "
document.getElementById("riddle").innerHTML = riddle


function checkAnswer() {

    let answer = document.getElementById("guess1").value.toLowerCase()
    let rightAnswer = "<span>Grattis, det var rätt! <a href='02page.html' class='move-on'>Gå vidare</a></span>"
    let wrongAnswer = "<span>Tyvärr, gissa igen. Var noga med stavning!</span>"

    document.getElementById("displayAnswer").innerHTML = (answer === "5" || answer === "fem" ? rightAnswer : wrongAnswer)
    answer === "5" || answer === "fem" ? counter = 0 : counter++
    if (counter > 3) document.getElementById("displayAnswer").innerHTML = "<span>Ni har kämpat på bra! <a href='02page.html' class='move-on'>Gå vidare</a></span>"

}

function getclue(){
    alert(clue)
}


function addSidePicture(){
    let image = document.createElement("img")
    image.setAttribute("src", "images/ida.jpg")
    image.setAttribute("width", "100%")
    imagenav.appendChild(image)
}