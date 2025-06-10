const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        listContainer.appendChild(li);
    }
    inputBox.value = "";
    sortTasks(); 
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        sortTasks(); 
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

function sortTasks() {
    const tasks = Array.from(listContainer.children);
    const unchecked = tasks.filter(task => !task.classList.contains("checked"));
    const checked = tasks.filter(task => task.classList.contains("checked"));

    listContainer.innerHTML = '';
    unchecked.forEach(task => listContainer.appendChild(task));
    checked.forEach(task => listContainer.appendChild(task));
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
    sortTasks(); 
}

showTask();