const workSubmitBtn = document.querySelector("#workout-submit");
            const workValueInput = document.querySelector("#workout-input");
            const workoutUp = document.querySelector("#workout-up");
            const workoutDown = document.querySelector("#workout-down");
            const workShowNow = document.querySelector("#show-value");
            const workCircleDiv = document.querySelector(".workout-goal-circle");
            const workSettingMain =  document.querySelector(".workout-setting-main");


            const workSaveGoal = JSON.parse(localStorage.getItem("workoutGoal"));
            const workSaveCurr = JSON.parse(localStorage.getItem("currworkout"));



            // 유저의 input 값을 받는다.
            workSubmitBtn.addEventListener("click", (e)=>{
                console.log(workValueInput.value);
                console.log(typeof workValueInput.value);
                if (Number(workValueInput.value) <= 0){
                    alert("양수를 입력해주세요");
                }else{
                    const goalValue = workValueInput.value;
                    localStorage.setItem("workoutGoal", JSON.stringify(goalValue));
                    const current = "0";
                    localStorage.setItem("currworkout", JSON.stringify(current));
                    workSettingMain.classList.toggle("hide");
                    history.go();
                }
            })



            const workSaveValue = localStorage.getItem("workoutGoal");
        
            function upValue(){
                const workSaveGoal = JSON.parse(localStorage.getItem("workoutGoal"));
                const workSaveCurr = JSON.parse(localStorage.getItem("currworkout"));

                const circleUpValue = 100 / workSaveGoal; 
                let prevValue = workSaveCurr * circleUpValue;
                console.log(prevValue, circleUpValue); 

                workCircleDiv.style.background = `conic-gradient(#C6D57E 0 ${prevValue += circleUpValue}%, rgb(235, 235, 235) 0 100%)`;
                // console.log(`(prevValue + circleUpValue is ${prevValue += circleUpValue}`);
                // console.log(`증가해야하는 원형값 ${prevValue}, ${circleUpValue}`);
                
                const afterUpValue = Number(workSaveCurr) + 1
              

                if (afterUpValue === Number(workSaveGoal)){
                    localStorage.setItem("currworkout", JSON.stringify(afterUpValue));
                    // 버튼 막기 
                    workoutUp.setAttribute("disabled", true);
                    history.go();
      

                }else{
                    workoutDown.removeAttribute("disabled");
                    localStorage.setItem("currworkout", JSON.stringify(afterUpValue));
                    history.go();
                }
            }

            function downValue(){
                const workSaveGoal = JSON.parse(localStorage.getItem("workoutGoal"));
                const workSaveCurr = JSON.parse(localStorage.getItem("currworkout"));

                const circleUpValue = 100 / workSaveGoal; 
                let prevValue = workSaveCurr * circleUpValue;

                workCircleDiv.style.background = `conic-gradient(#C6D57E 0 ${prevValue - circleUpValue}%, rgb(235, 235, 235) 0 100%)`;
                console.log(`(prevValue + circleUpValue is ${prevValue - circleUpValue}`);
                console.log(`감소해야하는 원형값 ${prevValue}, ${circleUpValue}`);

                const afterDownValue = Number(workSaveCurr) - 1;
                console.log(`감소후 값 ${afterDownValue}`);
  
                if (afterDownValue === 0){
                    localStorage.setItem("currworkout", JSON.stringify(afterDownValue));
                    workoutDown.setAttribute("disabled", true);
                    history.go();
             
                }else {
                    workoutUp.removeAttribute("disabled");
                    localStorage.setItem("currworkout", JSON.stringify(afterDownValue));
                    history.go();
                }
            }

            workoutDown.addEventListener("click", downValue);

   

            if (workSaveGoal !== null && workSaveCurr !== null){
                // 화면에 표시해줌.
                document.querySelector(".workout-banner").classList.toggle("hide");
                document.querySelector(".workout-box").classList.toggle("hide");


                // 수치 넣어주기
                document.querySelector("#workout-goal-value").innerText = `${workSaveGoal}회`;
                document.querySelector("#workout-curr-value").innerText = `${workSaveCurr}회`;
            
                document.querySelector("#left-workout").innerText = `${Number(workSaveGoal) - Number(workSaveCurr)}회`;

                // 그래프 그려주기.
                const circleUpValue = 100 / workSaveGoal; 
                let prevValue = workSaveCurr * circleUpValue;
                workCircleDiv.style.background = `conic-gradient(#C6D57E 0 ${prevValue}%, rgb(235, 235, 235) 0 100%)`;
                document.querySelector(".workoutcurrvalue").innerText = `${prevValue}%`;
                if (workSaveCurr == '0'){
                    workoutDown.setAttribute("disabled", true);
                }else if (workSaveCurr == workSaveGoal){
                    workoutUp.setAttribute("disabled", true);
                }


            }

            document.querySelector(".workout-header img").addEventListener("click",()=>{
                if (confirm("삭제하시겠습니까?")){
                    alert("삭제완료!");
                    localStorage.removeItem("workoutGoal");
                    localStorage.removeItem("currworkout");
                    history.go();
                }else{
                    alert('취소완료!');
                }
            })

            workoutUp.addEventListener("click", upValue);
            // circle.style.background = `conic-gradient(rgb(248, 157, 157) 0 ${beforeValue += upValue}%, rgb(235, 235, 235) 0 100%)`;
            // circle.classList.add("show");
            // circle.style.transition = `all 10s`;


            function workoutNext(){
                // 현재 페이지 제거후 다음 페이지 보여줌
                workSettingMain.classList.toggle("hide");
                document.querySelector(".workout-banner").classList.toggle("hide");
            }
                