const bookmarkBar = document.querySelector("#bookmark-box");
const naver = document.querySelector("#naver");
const bookMark = document.querySelector("#bookmark")
const bookmarkInput = document.querySelector("#input-box");
const address = document.querySelector("#address");
const setBtn = document.querySelector("#set-btn");


let bookMarkArr = [];

function set(){
    let name = bookmarkInput.value;
    let link = address.value;
    bookmarkInput.value = '';
    address.value = '';

    const li =document.createElement("li");
    const newA = document.createElement("a");
    const img = document.createElement("img");
    img.src = "img/folder.png";
    newA.setAttribute("href", link);
    newA.innerText = name;
    newA.classList.add("linkstyle")
    li.appendChild(img);
    li.appendChild(newA);
    bookmarkBar.appendChild(li);

    document.querySelector(".setting-popup").classList.toggle("hide");

    const newLink = {
        name : name,
        link : link,
    }

    bookMarkArr.push(newLink)
    localStorage.setItem("bookmark", JSON.stringify(bookMarkArr));
    console.log(bookMarkArr);


}

setBtn.addEventListener('click', set);

function updateLink(saved){
    const name = saved.name;
    const link = saved.link;
    const li =document.createElement("li");
    const newA = document.createElement("a");
    const img = document.createElement("img");
    img.src = "img/folder.png";
    newA.setAttribute("href", link);
    newA.innerText = name;
    newA.classList.add("linkstyle")
    li.appendChild(img);
    li.appendChild(newA);
    bookmarkBar.appendChild(li);
    // document.querySelector(".setting-popup").classList.toggle("hide");

}



const savedLink = localStorage.getItem("bookmark");
// console.log(savedLink);


if (savedLink != null){
    const savedNew = JSON.parse(savedLink);
    savedNew.forEach(updateLink);               
}



function addNew(){
  document.querySelector(".setting-popup").classList.toggle("hide");
}