let gameseq=[];
let userseq=[];
let started=false;
let color=["red","yellow","green","purple"];
let level=0;
let h2=document.querySelector("h2");
document.addEventListener("keypress", function() {
if(started==false) {
    console.log("game is started");
    started=true;
}
  levelup();
});

function Btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    },250)
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    },250)
}



 function levelup () {
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`

    let randindex=Math.floor(Math.random() *3);
    let randcolor=color[randindex];
    let randbtn=document.querySelector(`.${randcolor}`); 
    // console.log(randindex);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
   Btnflash(randbtn);
}



function check(idx){
// console.log(`curr level: ${level}`);

if(userseq[idx]===gameseq[idx]){
  if(userseq.length===gameseq.length){
    setTimeout(levelup,1000)
  }
} else {
    h2.innerHTML=`Game over! your score was <b>${level}</b> <br>press any key to start.`
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(() => {
    document.querySelector("body").style.backgroundColor="white";        
    }, 150);
    reset();
}


}









function Btnpress () {
    console.log(this);
    let btn=this;
    userflash(btn);
    userColor=btn.getAttribute("id");
    userseq.push(userColor);
    check(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",Btnpress);
}


function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}
