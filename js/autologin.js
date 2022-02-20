
const h2 = document.querySelector('.blinking__txt');
const cursor = document.querySelector('.cursor');



  const txt = `Hello.\nwelcome to my world.`;

  let counter = 0;
  let inter = setInterval(() => {
    if (txt.length-1 === counter) {
      cursor.classList.add('blink_animate');
      remove();
        clearInterval(inter);
    }; 
     
    h2.textContent += txt[counter];
    counter++;
  }, 80); 

  

function remove(){
    let j = h2.innerText.length;

    let removeFunc = setInterval(()=>{

    h2.innerText = h2.innerText.slice(0,j);

  

    if (j === 0){
        clearInterval(removeFunc);
        askName();
    }
    
   
    j--;
},70)
}

function askName(){
    let y = 0;

    let z = setInterval(()=>{
        const ask = `what is your name?`;
        h2.innerText += `${ask.charAt(y)}`
      
        y++;
  

        if (y === ask.length){
        clearInterval(z);
        document.querySelector(".user-input-container").classList.toggle("hide-login-name");

}

    },120);
}



    const userNameForm = document.querySelector("#user-name-form");
    const userNameInput = document.querySelector("#user-name-input");

    

    userNameForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        console.log(userNameInput.value);

        const userName = userNameInput.value;

        if (userName === ''){
            alert('이름을 입력해주세요');
        }else{
            localStorage.setItem("USER_NAME",JSON.stringify(userName) );
             history.go();

        }


 

    })



    const getSavedUserName = localStorage.getItem("USER_NAME");
  
    if (getSavedUserName !== null){
        console.log('있음!');
        
        // const parsedUserName = JSON.parse(getSavedUserName);
        document.querySelector(".body-contain").classList.remove("hide-main-dashboard");
        document.querySelector(".main-main-container").classList.toggle("hide-main-dashboard");
        document.querySelector(".nickname").innerText = JSON.parse(getSavedUserName);
        // document.querySelector(".user-name-header").innerText = `Hello. ${JSON.parse(getSavedUserName)}!`;

    }else{
        document.querySelector(".body-contain").classList.add("hide-main-dashboard");
    }