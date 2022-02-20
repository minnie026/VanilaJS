const allPlayBtn = document.querySelectorAll("#play-btn");
const allAudio = document.querySelectorAll("[data-name]");
const playingTxt = document.querySelector(".playing-text div");



allPlayBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
      const key = e.target.dataset.key;
        play(e,key)
        if (btn.classList.contains("stop")){
            btn.src = "img/play.png";
            btn.classList.toggle("stop");
            
        }else{
            btn.src = "img/stopmusic.png";
            btn.classList.toggle("stop");
            
        }
    })
})



  function play(e,key){
    e.target.classList.toggle("playing");

    allAudio.forEach((audio)=>{
    let name = audio.dataset.name;
    if (name ===key){
        console.log(`정답 ${name} and ${key}`);

        if (e.target.classList.contains("playing")){
           audio.play();
         
    
         }else{
            audio.pause();
        }
        }
     })

    }

    const allBack = document.querySelectorAll("[data-back]");
const allNext = document.querySelectorAll("[data-next]");
const allPage = document.querySelectorAll(".music-box");



const divArr= [];
allPage.forEach((e)=>{
    divArr.push(e);
    
})

console.log(divArr);

 allNext.forEach((next)=>{
     next.addEventListener('click', (e)=>{
         console.log(e.target.dataset.next); // 
         const nextBtnName = e.target.dataset.next; //first

         if (nextBtnName === 'first'){
             divArr[0].classList.add('hide');
             divArr[1].classList.remove('hide');
          }else if (nextBtnName === 'second'){
            divArr[1].classList.add('hide');
             divArr[2].classList.remove('hide');
          }else if(nextBtnName === 'third'){
            divArr[2].classList.add('hide');
             divArr[3].classList.remove('hide');
          }else if(nextBtnName === 'last'){
            divArr[3].classList.add('hide');
             divArr[0].classList.remove('hide');
          }
     })
 })
 
 allBack.forEach((back)=>{
     back.addEventListener('click', (e)=>{
         console.log(e.target.dataset.back); 
         const nextBtnName = e.target.dataset.back; //first

         if (nextBtnName === 'first'){
             divArr[0].classList.add('hide');
             divArr[3].classList.remove('hide');
          }else if (nextBtnName === 'second'){
            divArr[1].classList.add('hide');
             divArr[0].classList.remove('hide');
          }else if(nextBtnName === 'third'){
            divArr[2].classList.add('hide');
             divArr[1].classList.remove('hide');
          }else if(nextBtnName === 'last'){
            divArr[3].classList.add('hide');
             divArr[2].classList.remove('hide');
          }
     })
 })
 

 const heartBtn = document.querySelectorAll("#heart-btn");
 

 heartArr = [];
 heartBtn.forEach((i)=>{
    heartArr.push(i);
 })

 console.log( heartArr);

 function changColor(e){
     console.log(e);
    heartBtn.innerHTML = "❤️";
    heartBtn.classList.toggle('active');
 }
 
let  changeColor = {
    colorFirst : function (){
        heartArr[0].innerHTML= "❤️";
        heartArr[0].classList.toggle('active');
    },

    colorSecond : function(){
        heartArr[1].innerHTML= "❤️";
        heartArr[1].classList.toggle('active');
    },
    colorThird : function(){
        heartArr[2].innerHTML= "❤️";
        heartArr[2].classList.toggle('active');
    },
    colorLast : function(){
        heartArr[3].innerHTML= "❤️";
        heartArr[3].classList.toggle('active');
    },
}

heartArr[0].addEventListener("click",changeColor.colorFirst );
heartArr[1].addEventListener("click",changeColor.colorSecond );
heartArr[2].addEventListener("click",changeColor.colorThird );
heartArr[3].addEventListener("click",changeColor.colorLast );
 