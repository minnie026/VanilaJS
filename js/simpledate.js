/// 현재 날짜를 표시
// 현재 몇 월인지 표시

const todayIs = new Date();
const thisYear = todayIs.getFullYear();
const thisMonth = todayIs.getMonth() + 1;
const thisDate = todayIs.getDate();


document.querySelector("#curr-month").innerText =  todayIs.getMonth() + 1;
document.querySelector("#curr-day").innerText  =  todayIs.getDate();


// time 
const thisMonthDate = new Date(thisYear,thisMonth,0).getDate();
document.querySelector('#howMnayDateLeft').innerText = `➜ until next month: ${thisMonthDate - thisDate} days`;

function showTimeNow(){
    const currTime = new Date();
    const currHr = currTime.getHours();
    const currMin = String(currTime.getMinutes()).padStart(2,'0');
    const currSec = String(currTime.getSeconds()).padStart(2,'0');
    

    document.querySelector(".time-now").innerText = `${currHr}:${currMin}:${currSec}`;

}

showTimeNow();

setInterval(showTimeNow,1000);


