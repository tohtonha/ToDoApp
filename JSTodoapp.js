document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector("#todolist");
    const toDos = document.querySelector("ul");
    const input = document.querySelector("#newitem");
    const ul = document.querySelector("ul")

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const newItem = document.createElement("li");
        newItem.innerText = input.value;
        input.value="";
        ul.appendChild(newToDo);

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "X";
        newToDo.appendChild(removeBtn);
    });

    toDos.addEventListener("click", function(e) {
        const target = e.target.tagName.toLowerCase(); 
        if (target === "li") {
            e.target.style.textDecoration = "line-through";
        } else if (target === "button") {
            e.target.parentElement.remove();
        }
    });
})    
   
