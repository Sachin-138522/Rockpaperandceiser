const display = document.querySelector("#input");
const rock = document.querySelector('#btn1');
const paper = document.querySelector('#btn2');
const scissors = document.querySelector('#btn3');

const setRock = (e) => {
   display.innerText = "You choose Rock"
   display.style.backgroundColor = "red"
};
const setPaper = (e)=>{
   display.textContent = "You choose Paper"
}
const setScissors = (e)=>{
    display.textContent = "You choose scisser"

}
rock.addEventListener("click", setRock);
paper.addEventListener("click", setPaper);
scissors.addEventListener("click", setScissors);

const computerChoice = () => {
    const choice = ["Rock", "Paper", "Scissors"];
    const computer = choice[Math.floor(Math.random() * 3)];
    return computer;
};

const humanChoice = () => {
    const choice = prompt("Enter your choice");
    return choice;
};

const computer = computerChoice();
console.log("Computer choice:", computer);


