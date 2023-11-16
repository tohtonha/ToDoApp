const form = document.querySelector("#todolist");
const toDos = document.querySelector("ul");
const input = document.querySelector("#newitem");
const ul = document.querySelector("ul")


form.addEventListener("submit",function(e) {
    e.preventDefault();

    const newItem = document.createElement("li");
    let itemValue = input.value;
    newItem.innerText = itemValue;
    input.value="";
    newItem.isDone = false;
    ul.appendChild(newToDo);

    savedList.push({ task: newItem.innerText, isDone: false });
    localStorage.setItem("list", JSON.stringify(savedList));


    const removeBtn = document.createElement("button");
    removeBtn.innerText = "X";
    newItem.appendChild(removeBtn);
});

toDos.addEventListener("click", function(e) {
    const target = e.target.tagName.toLowerCase(); 
    if (target === "li") {
        e.target.style.textDecoration = "line-through";
    } else if (target === "button") {
        e.target.parentElement.remove();
    }
});

const savedList = JSON.parse(localStorage.toDos); 
    for (let i = 0; i < savedList.length; i++);
    let newItem = document.createElement("li");
    newItem.innerText = savedList[i].task;
    newItem.isDone = savedList[i].isDone ? true : false;
    if (newItem.isDone) {
        newItem.style.textDecoration = "line-through";
    }
    toDos.appendChild(newListItem);
