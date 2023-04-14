// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img")
let numCodSpan = document.getElementById("num-cod")
let numSalmonSpan = document.getElementById("num-salmon")
let numTropicalSpan = document.getElementById("num-tropical")
let numPufferSpan = document.getElementById("num-puffer")



// Fish Count Variables
let numCod= 0;
let numSalmon= 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("Btn").addEventListener("click", BtnClicked);

function BtnClicked() {

  //Determine Selected Character
  let question = document.getElementById("input").value;
 if (question == "---") {
 document.getElementById("output").innerHTML = "Please ask a question"
 } else if(question == "Does the magic 8 ball work?"){
  document.getElementById("output").innerHTML = "How dare you doubt me!"
} else if(question == "Is javascript cool?"){
  document.getElementById("output").innerHTML = "Of course!"
 } else { let randNum= Math.random();
   if(randNum < 0.2) {
   document.getElementById("output").innerHTML = "Without a Doubt"
   } else if (randNum < 0.4) {
    document.getElementById("output").innerHTML = "As I see it, yes"
   } else if (randNum < 0.6) {
     document.getElementById("output").innerHTML = "Concentrate and ask again"
  } else if(randNum < 0.8) {
     document.getElementById("output").innerHTML = "Don't count on it"
    } else if(randNum < 1) {
    document.getElementById("output").innerHTML = "Outlook not so good"
}
}
}


