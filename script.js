console.log("hello world")


const computerChoice = () => {
     const choice = [
        "Rock" , "Paper " , "Scisser"
     ]
     const computer = choice[Math.floor(Math.random()*3)]
    
     return computer
}
console.log("again hello")

const humanChoice = ()=>{
     const choice = prompt(" Enter your choice")
     
    return  choice
}
const computer = computerChoice()
console.log(computer)

// humanChoice();
