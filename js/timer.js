const timerMain = document.querySelector(".show-time");
const startBtn = document.querySelector("#start-btn");
const resetBtn = document.querySelector("#reset-btn")


let time = 1500;
let interVal;

function startTimer(){
    let min = parseInt(time/60);
    let sec = String(time % 60).padStart(2,"0");
    time--
    timerMain.innerText = `${min}:${sec}`;

    if (time === 0){
        clearInterval(interVal);
    }
}


resetBtn.addEventListener("click",()=>{
    clearInterval(interVal);
      history.go();
})


startBtn.addEventListener("click", (e)=>{
    console.log(e.target.innerText);
    if (e.target.innerText === 'start'|| e.target.innerText === 'restart'){
        e.target.innerText = "stop";
        interVal = setInterval(startTimer, 1000);
        document.querySelector(".timer-box-inner").style.backgroundColor = "rgba(172, 168, 251, 0.239)";
    }else{
        e.target.innerText = "restart";
        clearInterval(interVal);
        document.querySelector(".timer-box-inner").style.backgroundColor = "rgba(255,255,255,0.3)";

         
    }
})
