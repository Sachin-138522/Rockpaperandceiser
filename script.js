const playertext = document.querySelector("#playerbox")
const computertext = document.querySelector("#computerbox")
const option = document.querySelectorAll(".btncoice")
const resulttext = document.querySelector("#result")
let computer;
let player ;
let resultbox ;

option.forEach(Element => Element.addEventListener("click" , ()=>{
  player = Element.textContent;
  computerchoice()
  playertext.textContent = player
  computertext.textContent = computer
  resultbox = result();
    resulttext.textContent = resultbox;
    if (resultbox === "YOU WON") {
      resulttext.style.backgroundColor = "green";
    } else if (resultbox === "YOU LOST") {
      resulttext.style.backgroundColor = "red";
    } else {
      resulttext.style.backgroundColor = "cyan";
    }
}))
function computerchoice(){
  RandomNum = Math.floor(Math.random()*3)+1
  switch(RandomNum){
    case 1:
       computer = "ROCK"
       break;
    case 2 : 
      computer = "PAPER"
      break;
    case 3 :
      computer = "SCISSOR"
      break;
  }
}
function result (){
  if(computer == player){
    return "It's Draw!"
  }
  else if (computer == "ROCK"){
    return(player =="PAPER")?"YOU WON":"YOU LOST"
  }
  else if (computer == "PAPER"){
    return(player =="SCISSOR")?"YOU WON":"YOU LOST"
  }
  else if (computer == "SCISSOR"){
    return(player =="ROCK")?"YOU WON":"YOU LOST"
  }
}
resultbox = result();