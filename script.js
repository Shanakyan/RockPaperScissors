  let rock = document.querySelector("#rock");
//  let rock = document.querySelector("#rock");
 let humanRound = 0;
 let AIRound = 0;

let button = document.querySelector(".btn");
// let scissors = document.querySelector(".aiArmImage")

let option = '';
function func(){
// const images = ["./img/AIscissorsimage.png",".img/AIpaperimage.png/img/.png","./img/AIArmimage.png"];     
let randomImage = Math.floor(Math.random()*3);
if(randomImage==1){
    document.getElementById("AIArm").src="./img/AIscissorsimage.png";
    option = "scissors";
    
}
else if(randomImage==2){
    document.getElementById("AIArm").src="./img/AIpaperimage.png";
    option = "paper";
  
}
else {
    document.getElementById("AIArm").src="./img/AIArmimage.png";
    option = "rock"; 
}
return option;
}

function rockHuman(){
    document.getElementById("HumanArm").src="./img/humanArmRock.png"
    if(option=="paper"){
       ++AIRound;
    }
    else if(option == "scissors"){
      ++humanRound;
    }
    document.querySelector("#AIRound").textContent = `${AIRound}`;
    document.querySelector("#humanRound").textContent = `${humanRound}`;
}

function paperHuman(){
    document.getElementById("HumanArm").src="./img/humanArmPaper.png"
    if(option == "rock"){
    humanRound++;
    }
    else if(option=="scissors"){
        AIRound++;
    }
    document.querySelector("#AIRound").textContent = `${AIRound}`;
    document.querySelector("#humanRound").textContent = `${humanRound}`;
}

function scissorsHuman(){
    document.getElementById("HumanArm").src="./img/humanArmscissors.png"
    if(option == "rock"){
        AIRound++;
        }
        else if(option=="paper"){
            humanRound++;
        }
        document.querySelector("#AIRound").textContent = `${AIRound}`;
        document.querySelector("#humanRound").textContent = `${humanRound}`;
}


//    rock.addEventListener("click",rockHuman);



// table.onclick = function(event) {
//     let target = event.target; // где был клик?
  
//     if (target.tagName != 'TD') return; // не на TD? тогда не интересует
  
//     highlight(target); // подсветить TD
//   };


// button.addEventListener("click", func);