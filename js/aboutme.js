
const newInput = document.querySelector("#newInput-box");
const meBtn = document.querySelector("#aboutme-btn");
const form = document.querySelector("#hello-form");

const HELLO_KEY = "hello";

const savedHello = localStorage.getItem(HELLO_KEY);

if (savedHello !== null){
const parsedHello = JSON.parse(savedHello);
// console.log(`this is saved ${parsedHello}`);
newInput.value = parsedHello;
}


function saveData(){
const newHello = newInput.value;
localStorage.setItem(HELLO_KEY, JSON.stringify(newHello));
}

function handleBtn(){
if (meBtn.innerText === "EDIT"){
newInput.disabled = false;
meBtn.innerText = "SAVE";
meBtn.addEventListener("click", saveData);        
} else{
newInput.disabled = true;
meBtn.innerText = "EDIT";
}
}

function handleSubmit(e){
e.preventDefault();
newInput.disabled = true;
meBtn.innerText = "EDIT";
saveData()
}


meBtn.addEventListener("click", handleBtn);
form.addEventListener("submit", handleSubmit);