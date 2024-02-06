//   let rock = document.querySelector("#rock");
//  let paper = document.querySelector("#paper");
//  let scissors = document.querySelector("#scissors");
//  let a = document.querySelector("#AIRound");

let buttons = document.querySelectorAll(".btn");
let restart = document.querySelector("#restart");
let nextround =document.querySelector("#nextround");
let humanCount = 0;
let AICount = 0;
let option = '';

function chooseAI(){
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
// return option;
}

function  chooseHuman(choice){

    if(choice == "paper"){
        document.getElementById("HumanArm").src="./img/humanArmPaper.png";
        if(option=="paper"){

        }
        else if(option == "scissors"){
            AICount++;
        }
        else if(option =="rock"){
            humanCount++;
        }

    }
    else if(choice=="rock"){
        document.getElementById("HumanArm").src="./img/humanArmRock.png";
        if(option=="paper"){
            AICount++;
        }
            else if(option=="scissors"){
                humanCount++;
            }
     
        }    
    else {
    document.getElementById("HumanArm").src="./img/humanArmscissors.png";
        if(option =="rock"){
            AICount++;
        }
            else if(option=="paper"){
                humanCount++;
            }
     
      }   
    
 }

 //    buttons.forEach(el => el.addEventListener("click",function(){
//     // func();
//     console.log(el);
//     if(el=="#paper"){
//         document.getElementById("HumanArm").src="./img/humanArmPaper.png"  
//     }
//    }))

for(let el of buttons) {   
    el.addEventListener("click", function(){
        let choiceHuman = el.getAttribute("id");
        chooseAI();
        chooseHuman(choiceHuman); 

        document.querySelector("#AIRound").textContent = `${AICount}`;
        document.querySelector("#humanRound").textContent = `${humanCount}`; 

        if(option==choiceHuman){
                    document.getElementById("itIsDraw").style.display="block"; 
                    document.querySelector(".buttom_wrap").style.display = "none";
                    // document.querySelector("buttom_wrap").classList.add('d-none');
                    document.querySelector(".result").style.display = "block"; 
                }         
    }
    ) 
   }

    nextround.addEventListener("click", function(){
    document.getElementById("itIsDraw").style.display="none";
    document.querySelector(".result").style.display = "none";
    document.querySelector(".buttom_wrap").style.display = "block";
    document.getElementById("HumanArm").src="./img/humanArmRock.png";
    document.getElementById("AIArm").src="./img/AIArmimage.png";
   })


    restart.addEventListener("click", function(){
    document.querySelector("#AIRound").textContent = 0;    
    document.querySelector("#humanRound").textContent = 0;
    document.querySelector(".buttom_wrap").style.display = "block";
    document.getElementById("itIsDraw").style.display="none";
    document.querySelector(".result").style.display = "none";
    document.getElementById("HumanArm").src="./img/humanArmRock.png";
    document.getElementById("AIArm").src="./img/AIArmimage.png";
    humanCount = 0;
    AICount = 0;
    }
    )




            




