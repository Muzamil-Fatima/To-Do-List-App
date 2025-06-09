const inputBox = document.getElementById("input-box");
const listContainer = documnet.getElementById("list-container");

function addTask(){
 if(inputBox. value === ''){
    alert("You msut write something");
 }
 else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
 }
}