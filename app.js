const inputbox = document.getElementById("input-text");
const taskbox = document.getElementById("task");

function addTask(){
    if(inputbox.value === ''){
        alert("enter some thing");
    }
    else{
        let li = document.createElement("li") ;
        li.innerHTML = inputbox.value;
        taskbox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}
taskbox.addEventListener("click", (e)=> {
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);
function savedata(){
    localStorage.setItem("data",taskbox.innerHTML);
}
function showtask(){
    taskbox.innerHTML=localStorage.getItem("data");
}
showtask()