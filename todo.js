let taskWrite=document.getElementById('input-Task');
let taskList=document.getElementById('Task-List');

function addTask(){
    if(taskWrite.value==''){
        alert("please enter the task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=taskWrite.value;
        taskList.appendChild(li);
        
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
       
    }
    saveTask();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveTask();
    }
     else  if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }
},false);

function saveTask(){
    localStorage.setItem("data",taskList.innerHTML);
}
function showTask(){
    taskList.innerHTML=localStorage.getItem("data");
}
showTask();