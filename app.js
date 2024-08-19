let heading = document.querySelector(".heading");
let heading2 =document.querySelector(".heading2");
heading.addEventListener("mouseenter",function(){
    heading.style.color ="purple";
});
heading2.addEventListener("mouseenter",function(){
    heading2.style.color ="blue";
});
let gameSeq=[];
let userSeq=[];
let btns =["red","yellow","green","purple"];
let started=false;
let level =0;
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        levelUp();
     }
    });
function levelUp(){
   level=level+1;
    heading2.innerText=`Level ${level}`;
    //now after key pressing any random button will flash
    userSeq=[];
    let randIndx = Math.floor(Math.random()*3);
    randColor = btns[randIndx];//red
    randButton=document.querySelector(`.${randColor}`); 
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randButton);
};

//btnfash will work for the styling
function btnFlash(randomButton){
randomButton.classList.add("flash");
setTimeout(function(){
    randomButton.classList.remove("flash");
},1000);
};
function userFlash(btn){
   btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500
);
    };  
//NOW AFTER PRESSING THE BUTTON
let allbtns = document.querySelectorAll(".btn");
for(let btns of allbtns){
    btns.addEventListener("click",btnPress);
}
function btnPress(){
let btn = this;// the button which we presses is contained in this
userFlash(btn);
userColor = btn.getAttribute("id");
userSeq.push(userColor);
// console.log(userSeq);
checkAns(userSeq.length-1);
}
function checkAns(idx){  
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
  
           setTimeout(levelUp(),1000) ;
             
        }
    }else{
        heading2.innerText=`Game Over!Your Level was ${level}! Press any key to start again`;
        gameOver();
        restartGame();
        }
};
function restartGame(){
    started=false;
    level=0;
     userSeq =[];
     gameSeq =[];
  
}
function gameOver(){
    let body = document.querySelector("body");
    body.classList.add("bgColor")
    setTimeout(function(){
        body.classList.remove("bgColor")
    },1000)
}
