const submitBtn = document.querySelector("#submitBtn");
const valueInput = document.querySelector("#value-input");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");
const showNow = document.querySelector("#show-value");
const circleDiv = document.querySelector(".goal-circle");
const settingMain =  document.querySelector(".setting-main");
const savedGoal = JSON.parse(localStorage.getItem("bookgoal"));
const savedCurrent = JSON.parse(localStorage.getItem("currentbook"));


-
submitBtn.addEventListener("click", (e)=>{
    console.log(valueInput.value);
    console.log(typeof valueInput.value);
    if (Number(valueInput.value) <= 0){
        alert("양수를 입력해주세요");
    }else{
        const goalValue = valueInput.value;
        localStorage.setItem("bookgoal", JSON.stringify(goalValue));
        const current = "0";
        localStorage.setItem("currentbook", JSON.stringify(current));
        settingMain.classList.toggle("hide");
        history.go();
    }
})



const savedValue = localStorage.getItem("bookgoal");

function upValue(){
    const savedGoal = JSON.parse(localStorage.getItem("bookgoal"));
    const savedCurrent = JSON.parse(localStorage.getItem("currentbook"));

    const circleUpValue = 100 / savedGoal; 
    let prevValue = savedCurrent * circleUpValue;
    console.log(prevValue, circleUpValue); 

    circleDiv.style.background = `conic-gradient(salmon 0 ${prevValue += circleUpValue}%, rgb(235, 235, 235) 0 100%)`;
    // console.log(`(prevValue + circleUpValue is ${prevValue += circleUpValue}`);
    // console.log(`증가해야하는 원형값 ${prevValue}, ${circleUpValue}`);
    
    const afterUpValue = Number(savedCurrent) + 1
  

    if (afterUpValue === Number(savedGoal)){
        localStorage.setItem("currentbook", JSON.stringify(afterUpValue));

        upBtn.setAttribute("disabled", true);
        history.go();


    }else{
        downBtn.removeAttribute("disabled");
        localStorage.setItem("currentbook", JSON.stringify(afterUpValue));
        history.go();
    }
}

function downValue(){
    const savedGoal = JSON.parse(localStorage.getItem("bookgoal"));
    const savedCurrent = JSON.parse(localStorage.getItem("currentbook"));

    const circleUpValue = 100 / savedGoal; 
    let prevValue = savedCurrent * circleUpValue;

    circleDiv.style.background = `conic-gradient(salmon 0 ${prevValue - circleUpValue}%, rgb(235, 235, 235) 0 100%)`;
    // console.log(`(prevValue + circleUpValue is ${prevValue - circleUpValue}`);
    // console.log(`감소해야하는 원형값 ${prevValue}, ${circleUpValue}`);

    const afterDownValue = Number(savedCurrent) - 1;
    // console.log(`감소후 값 ${afterDownValue}`);

    if (afterDownValue === 0){
        localStorage.setItem("currentbook", JSON.stringify(afterDownValue));
        downBtn.setAttribute("disabled", true);
        history.go();
 
    }else {
        upBtn.removeAttribute("disabled");
        localStorage.setItem("currentbook", JSON.stringify(afterDownValue));
        history.go();
    }
}

downBtn.addEventListener("click", downValue);



if (savedGoal !== null && savedCurrent !== null){
    document.querySelector(".book-banner").classList.toggle("hide");
    document.querySelector(".book-box").classList.toggle("hide");


    // 수치 넣어주기
    document.querySelector("#goal-value").innerText = savedGoal;
    document.querySelector("#reading-value").innerText = savedCurrent;
    
    document.querySelector("#left-book").innerText = Number(savedGoal) - Number(savedCurrent);

    // 그래프 그려주기.
    const circleUpValue = 100 / savedGoal; // 20
    let prevValue = savedCurrent * circleUpValue;
    circleDiv.style.background = `conic-gradient(salmon 0 ${prevValue}%, rgb(235, 235, 235) 0 100%)`;
    document.querySelector(".nowValue").innerText = `${prevValue}%`;
    if (savedCurrent == '0'){
        downBtn.setAttribute("disabled", true);
    }else if (savedCurrent == savedGoal){
        upBtn.setAttribute("disabled", true);
    }


}

document.querySelector(".book-header img").addEventListener("click",()=>{
    if (confirm("삭제하시겠습니까?")){
        alert("삭제완료!");
        localStorage.removeItem("bookgoal");
        localStorage.removeItem("currentbook");
        history.go();
    }else{
        alert('취소완료!');
    }
})

upBtn.addEventListener("click", upValue);
// circle.style.background = `conic-gradient(rgb(248, 157, 157) 0 ${beforeValue += upValue}%, rgb(235, 235, 235) 0 100%)`;
// circle.classList.add("show");
// circle.style.transition = `all 10s`;


function nextPage(){
    // 현재 페이지 제거후 다음 페이지 보여줌
    settingMain.classList.toggle("hide");
    document.querySelector(".book-banner").classList.toggle("hide");
}
    