         
const inputBox = document.querySelector("#todo-input-box");
const todoInput = document.querySelector("#todo-input-box input");
const todolist = document.querySelector("#todo-list");
console.log(inputBox,todoInput,todolist);

const showLeft = document.querySelector("#left-value");
const showValueChecked = document.querySelector("#checked-value");
const showAllValue = document.querySelector("#all-to-do");

// add todo

let todoArr = [];
let completedArr = []; 

function saveTodo(){
    console.log(todoArr);
    localStorage.setItem("todolist", JSON.stringify(todoArr));
    localStorage.setItem("checkedlist", JSON.stringify(completedArr));
}



function checkdTodo(e){
       

    if (!e.target.nextSibling.classList.contains("edit-hide")){
        let result = e.target.nextSibling.classList.contains("checked")
  
        if (!result){
            e.target.innerText = "✔️"; 
            e.target.classList.toggle("checkbox"); 
            const newtag = e.target.nextSibling; 
            newtag.classList.toggle("checked");
    
            const checkedID = e.target.parentElement.id;
            console.log(checkedID);
            console.log(`parseInt(checkedLi) : ${parseInt(checkedID)}`);
    
  
            const checkedTodo = todoArr.find((todo)=> todo.id == parseInt(checkedID));
            console.log(`hi is ${checkedTodo}`);
            completedArr.push(checkedTodo);
            todoArr = todoArr.filter((todo)=> todo.id !== parseInt(checkedID));
            // completedArr.push()
            console.log(`newtodoarr ${todoArr}`);
         
            saveTodo();
            history.go()
    
            
        } else { 

            e.target.classList.toggle("checkbox"); 
            const newtag = e.target.nextSibling; 
            newtag.classList.toggle("checked");
            const reChecked = e.target.parentElement.id;
            console.log(`재체크아이디 ${reChecked}`)
    

               const nonCheck = completedArr.find((todo)=> todo.id == parseInt(reChecked));
               console.log(`non is ${nonCheck}`);
               todoArr.push(nonCheck);
    
    
            // 완료된 배열 
            completedArr = completedArr.filter((todo)=> todo.id !== parseInt(reChecked));
    
         
            saveTodo();
            history.go()
    
        } 
    }else{
        alert('체크된 상태에서는 불가능!');
    }
   
    

}

function editLocal(id, value){
    console.log(`this is target ${id} and value ${value}`);
    console.log(`todoarr is ${todoArr}`);
    todoArr.map((item)=>{
        item.id == id ? item.text = value : item;
    } )
    saveTodo();


}

// 수정 테스트 1
function editTodo(e, id){
    const span = e.target;
    span.classList.add('edit-hide');

    console.log(`what is target ${e.target}`);
    console.log(e.target.parentElement.id);
    console.log(`id : ${id}`); // o
    console.dir(e.target);
    console.log(`this is innerText ${e.target.innerText}`);
    console.log(`parent : ${e.target.parentNode}`);

    const editInput = document.createElement("input");
    editInput.value = e.target.innerText; // put the value
    editInput.classList.add("edit-input");

    const parentLi = e.target.parentElement;
    parentLi.appendChild(editInput);
    // edit todo
    editInput.addEventListener("keypress", (e)=>{
        // if(e.key === 'enter'); 
        console.log(e.key);
        if (e.key == 'Enter'){
            console.log('true');
            const targetId = e.target.parentElement.id;
            const targetValue = e.target.value;
            // 수정하는 함수 실행시켜줌.(id, value보내줌)
            editLocal(targetId, targetValue);
            editInput.setAttribute("disabled", true);
            history.go();
        }
    })

 }

function paintToDo(todo){
    console.log(todo);
    const todoLi = document.createElement("li");
    todoLi.id = todo.id;
    const todoDiv = document.createElement("div");
    // todoDiv.innerText = "❌";
    todoDiv.classList.add("check-box");
    todoDiv.classList.add("todo-checkbox"); 
    todoDiv.addEventListener("click", checkdTodo)    
    const todoSpan = document.createElement("span");
    todoSpan.classList.add("todo-text"); 
    todoSpan.classList.add("to-do-li"); 

    todoSpan.addEventListener("dblclick",(e)=> 
    {   if (!todoSpan.classList.contains("checked")){

        editTodo(e,todoSpan.parentElement.id)}
    })
    todoSpan.innerText = todo.text;
    console.log(todo.text);
    const todoBtn = document.createElement("button");
    todoBtn.innerText = '...';
    todoBtn.classList.add("delete-todo-btn"); 
    todoBtn.addEventListener("click", deleteTodo);
    todoLi.appendChild(todoDiv);
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoBtn);
    todolist.appendChild(todoLi);
}

function paintCheck(todo){
    const todoLi = document.createElement("li");
    todoLi.id = todo.id;
    const todoDiv = document.createElement("div");
    todoDiv.innerText = "✔️";
    todoDiv.classList.add("todo-checkbox"); 
    todoDiv.classList.add("check-box"); 
    todoDiv.classList.add("checkbox");
    todoDiv.addEventListener("click", checkdTodo)    
    const todoSpan = document.createElement("span");
    todoSpan.innerText = todo.text;
    todoSpan.classList.toggle("checked");
    todoSpan.classList.add("todo-text");
    todoSpan.classList.add("to-do-li"); 
    console.log(todo.text); 
    const todoBtn = document.createElement("button");
    todoBtn.innerText = '...';
    todoBtn.classList.add("delete-todo-btn"); 
    todoBtn.addEventListener("click", deleteTodo);
    todoLi.appendChild(todoDiv);
    todoLi.appendChild(todoSpan);
    todoLi.appendChild(todoBtn);
    todolist.appendChild(todoLi);
}





function paintLeft(left){
    showLeft.innerText = `${left}`;
    
    

}

const savedTodo = localStorage.getItem("todolist");
console.log(`savedtodo${savedTodo}`);
const savedCheck = localStorage.getItem("checkedlist");



if (savedTodo !== null){
    const parsedTodo = JSON.parse(savedTodo);
    todoArr = parsedTodo;
    const leftValue = parsedTodo.length;
    parsedTodo.forEach(paintToDo);
    paintLeft(leftValue);
    showAllValue.innerText = leftValue;

}




function paintCheckValue(value){
    showValueChecked.innerText = `${value}`;

    
}


if (savedCheck !== null){
    const parsedCheck = JSON.parse(savedCheck);
    completedArr = parsedCheck;
    const checkedValue = parsedCheck.length;
    parsedCheck.forEach(paintCheck);
    paintCheckValue(checkedValue);
    const leftTest = JSON.parse(savedTodo).length;
    const allvalue = leftTest + checkedValue;
    showAllValue.innerText = allvalue;
}





function deleteTodo(event){
    console.log(event.currentTarget);
    console.log(event.target.nextSibling);
    console.log(event.target);
    // console.log(event.target.firstChild);
    // console.log(event.target.childNodes[0]);
    // console.log(event.target.nextSibling);
    console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();

    todoArr = todoArr.filter((todo)=> todo.id !== parseInt(li.id));
    completedArr = completedArr.filter((todo)=> todo.id !== parseInt(li.id));
    saveTodo();
    history.go();
}

function addToDo(event){
    event.preventDefault(); 
    const newTodo = todoInput.value; 
    todoInput.value = ''; 

    const newTodoObj = {
        id : Date.now(),
        text : newTodo,
    };
    todoArr.push(newTodoObj);
    paintToDo(newTodoObj); /// newtodo 로 지정하면 위에서 text 값이 undefiend 로 반환됨.
    saveTodo();
    history.go();

}

inputBox.addEventListener("submit", addToDo);


const deleteBtn = document.querySelector("#all-delete");


function allDelete(){
    localStorage.removeItem("todolist");
    localStorage.removeItem("checkedlist");
    history.go();
    // window.location.href=window.location.href;  // 
}

deleteBtn.addEventListener("click", allDelete);

