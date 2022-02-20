const waterSubmitBtn = document.querySelector("#water-submit");
const waterValueInput = document.querySelector("#water-value-input");
const waterUp = document.querySelector("#waterUp");
const waterDown = document.querySelector("#waterDown");
const waterShowNow = document.querySelector("#show-value");
const waterCircleDiv = document.querySelector(".water-goal-circle");
const waterSettingMain =  document.querySelector(".water-setting-main");


const waterSaveGoal = JSON.parse(localStorage.getItem("waterGoal"));
const waterSaveCurr = JSON.parse(localStorage.getItem("currentwater"));



// 유저의 input 값을 받는다.
waterSubmitBtn.addEventListener("click", (e)=>{
    console.log(waterValueInput.value);
    console.log(typeof waterValueInput.value);
    if (Number(waterValueInput.value) <= 0){
        alert("양수를 입력해주세요");
    }else{
        const goalValue = waterValueInput.value;
        localStorage.setItem("waterGoal", JSON.stringify(goalValue));
        const current = "0";
        localStorage.setItem("currentwater", JSON.stringify(current));
        waterSettingMain.classList.toggle("hide");
        history.go();
    }
})



const waterSaveValue = localStorage.getItem("waterGoal");

function upValue(){
    const waterSaveGoal = JSON.parse(localStorage.getItem("waterGoal"));
    const waterSaveCurr = JSON.parse(localStorage.getItem("currentwater"));

    const circleUpValue = 100 / waterSaveGoal; 
    let prevValue = waterSaveCurr * circleUpValue;
    console.log(prevValue, circleUpValue); 

    waterCircleDiv.style.background = `conic-gradient(#95bfe3 0 ${prevValue += circleUpValue}%, rgb(235, 235, 235) 0 100%)`;
    // console.log(`(prevValue + circleUpValue is ${prevValue += circleUpValue}`);
    // console.log(`증가해야하는 원형값 ${prevValue}, ${circleUpValue}`);
    
    const afterUpValue = Number(waterSaveCurr) + 100
  

    if (afterUpValue === Number(waterSaveGoal)){
        localStorage.setItem("currentwater", JSON.stringify(afterUpValue));
        // 버튼 막기 
        waterUp.setAttribute("disabled", true);
        history.go();


    }else{
        waterDown.removeAttribute("disabled");
        localStorage.setItem("currentwater", JSON.stringify(afterUpValue));
        history.go();
    }
}

function downValue(){
    const waterSaveGoal = JSON.parse(localStorage.getItem("waterGoal"));
    const waterSaveCurr = JSON.parse(localStorage.getItem("currentwater"));

    const circleUpValue = 100 / waterSaveGoal; 
    let prevValue = waterSaveCurr * circleUpValue;

    waterCircleDiv.style.background = `conic-gradient(#95bfe3 0 ${prevValue - circleUpValue}%, rgb(235, 235, 235) 0 100%)`;
    console.log(`(prevValue + circleUpValue is ${prevValue - circleUpValue}`);
    console.log(`감소해야하는 원형값 ${prevValue}, ${circleUpValue}`);

    const afterDownValue = Number(waterSaveCurr) - 100;
    console.log(`감소후 값 ${afterDownValue}`);

    if (afterDownValue === 0){
        localStorage.setItem("currentwater", JSON.stringify(afterDownValue));
        waterDown.setAttribute("disabled", true);
        history.go();
 
    }else {
        waterUp.removeAttribute("disabled");
        localStorage.setItem("currentwater", JSON.stringify(afterDownValue));
        history.go();
    }
}

waterDown.addEventListener("click", downValue);



if (waterSaveGoal !== null && waterSaveCurr !== null){
    // 화면에 표시해줌.
    document.querySelector(".water-banner").classList.toggle("hide");
    document.querySelector(".water-box").classList.toggle("hide");


    // 수치 넣어주기
    document.querySelector("#water-goal-value").innerText = `${waterSaveGoal}ml`;
    document.querySelector("#drinking-value").innerText = `${waterSaveCurr}ml`;

    document.querySelector("#left-water").innerText = `${Number(waterSaveGoal) - Number(waterSaveCurr)}ml`;

    // 그래프 그려주기.
    const circleUpValue = 100 / waterSaveGoal; 
    let prevValue = waterSaveCurr * circleUpValue;
    waterCircleDiv.style.background = `conic-gradient(#95bfe3 0 ${prevValue}%, rgb(235, 235, 235) 0 100%)`;
    document.querySelector(".waterCurrValue").innerText = `${prevValue}%`;
    if (waterSaveCurr == '0'){
        waterDown.setAttribute("disabled", true);
    }else if (waterSaveCurr == waterSaveGoal){
        waterUp.setAttribute("disabled", true);
    }


}

document.querySelector(".water-header img").addEventListener("click",()=>{
    if (confirm("삭제하시겠습니까?")){
        alert("삭제완료!");
        localStorage.removeItem("waterGoal");
        localStorage.removeItem("currentwater");
        history.go();
    }else{
        alert('취소완료!');
    }
})

waterUp.addEventListener("click", upValue);
// circle.style.background = `conic-gradient(rgb(248, 157, 157) 0 ${beforeValue += upValue}%, rgb(235, 235, 235) 0 100%)`;
// circle.classList.add("show");
// circle.style.transition = `all 10s`;


function WaternextPage(){
    // 현재 페이지 제거후 다음 페이지 보여줌
    waterSettingMain.classList.toggle("hide");
    document.querySelector(".water-banner").classList.toggle("hide");
}