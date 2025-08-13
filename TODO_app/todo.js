const addBtn = document.getElementById("add_button");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

window.onload = loadTasks;

//Function to create task HTML
function createTaskElement(taskText, isDone=false){
    const li = document.createElement("li");
    if (isDone) li.classList.add("done");
    li.innerHTML=`
                <span>${taskText}</span>
                <button class="done_button">Done</button>
                <button class="remove_button">Remove</button>
    `;
    return li;
            
}

//Add task
function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        taskList.appendChild(createTaskElement(taskText)); 
        taskInput.value="";
        saveTasks();
    }
}

//save all tasks to localStorage
function saveTasks(){
    const tasks = [];
    document.querySelectorAll("#taskList li").forEach(li =>{
        tasks.push({
            text: li.querySelector("span").textContent,
            done: li.classList.contains("done")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Load tasks from localStorage
function loadTasks(){
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => {
        taskList.appendChild(createTaskElement(task.text, task.done));
    });
}

//Handle clicks on the task list
taskList.addEventListener("click", (e) => {
    if(e.target.classList.contains("done_button")){
        e.target.parentElement.classList.toggle("done");
        saveTasks();
    }
    if(e.target.classList.contains("remove_button")){
        e.target.parentElement.remove();
        saveTasks();
    }
});

addBtn.addEventListener("click", addTask);

//Add task on Enter key

taskInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") addTask();
});

