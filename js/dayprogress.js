const ddayName = document.querySelector("#dday-name");
const ddayDate = document.querySelector("#dday-date");

const showDate = document.querySelector("#showdate");
const showName = document.querySelector("#showname");

const progressBar = document.querySelector(".progress-bar");
const percent = document.querySelector(".progress-percent");

const dayShowLeft = document.querySelector(".content-footer button");

const firstPage = document.querySelector("#card1");
const secondPage = document.querySelector("#card2");
const thirdPage = document.querySelector("#card3");
const mainPage = document.querySelector("#card4");


function setDay(){
    const nameOfDay = ddayName.value;
    const dateOfDay = ddayDate.value;

    if (nameOfDay === '' || dateOfDay === ''){
        alert('이름과 날짜를 확인해주세요');

    } else{

        const today = new Date();
        const dday = new Date(dateOfDay);
        const diff = dday - today;
        const getDay = Math.ceil(diff/(1000*60*60*24));
        const dayGap = 100 / getDay;
        console.log(`daygap is ${dayGap}`);
        const dayObj = {
        name : nameOfDay,
        enddate : dateOfDay,
        startdate : today,
        daygap : dayGap,
        dday : getDay
        }
          saveLocal(dayObj);
        
        secondPage.classList.toggle("hide");
        thirdPage.classList.toggle("hide");
    
    }

}

function toSetup(){
    firstPage.classList.toggle("hide");
    secondPage.classList.toggle("hide");

}


function saveLocal(value){
    localStorage.setItem("DDAYPROGRESS", JSON.stringify(value));
}

function reloadPage(){
    history.go();
    // 해당 페이지 지우고 메인페이지 보여주기 
}

const savedDate = localStorage.getItem("DDAYPROGRESS");

if (savedDate != null){
    const parsedDate = JSON.parse(savedDate);
    console.log(parsedDate);
    const savedNameValue = parsedDate.name;
    const savedEnd = parsedDate.enddate;
    const startValue = parsedDate.startdate;
    const savedGap = parsedDate.daygap;
    const savedDday = parsedDate.getDay;
    showName.innerText = savedNameValue;
    showDate.innerText = savedEnd;

    
    const today = new Date(); 
    const newDay = new Date(startValue);
 

    const diff =  today - newDay;
    const day = Math.floor(diff/(1000*60*60*24));
    const current = savedGap * day;



    // 남은 일수 넣어주기 
    const leftDDayValue = new Date(savedEnd);
    const leftDiff = leftDDayValue - today;
    dayShowLeft.innerText =` ${Math.ceil(leftDiff/(1000*60*60*24))}days left`;
    console.log(`leftdate is ${day*-1}`)
    
    
    if (current >= 100){
        progressBar.style.width = `100%`;
        percent.innerText = `100%`;

    } else {
        progressBar.style.width = `${current}%`;
        percent.innerText = `${Math.ceil(current)}%`;

    }
    
    firstPage.classList.toggle("hide");
    mainPage.classList.toggle("hide");

}


function deleteDay(){
    if(confirm("디데이를 삭제하시겠습니까?")){
        localStorage.removeItem("DDAYPROGRESS");
        alert("삭제완료");
        history.go();
    } else {
        alert("취소됨");
    }
}