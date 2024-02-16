// const inputBox = document.getElementById("input")

// function addTask(){
// if(inputBox.value === ''){
//     alert("you must write something!")
// }
// else{
//     const li = document.createElement("li")
//     li.innerHTML = inputBox.value
//     listContainer.appendchild
// }

// }


// jsons vuwert mtlian divs/sections/mains
let todo = JSON.parse(localStorage.getItem("todo")) || [];  

// shemogvakvs mtavari inputi,li,spani sadac raodenoba iwereba da buttonebi
const todoInput = document.getElementById("input")
const todoList = document.getElementById("todoList")
const todoCount = document.getElementById("num")
const clear = document.getElementById("clearCompleted")
const all = document.getElementById("all")
const actives = document.getElementById("actives")
const completed = document.getElementById("completed")


// viwkebt event listenerebis mibmas

// jer vusment mtlian dom contents
// gilakebs vabamt eventebs clickis saxit da vuwert ra punkciac unda sheasrulos

document.addEventListener("DOMContentLoaded",function(event){
    todoInput.addEventListener("keydown",()=>{
        if(event.key === "Enter"){
            event.preventDefault();
            addTask();
        };
    });

    // clear.addEventListener("click",clearCompleted());
    // all.addEventListener("click",showAll());
    // actives.addEventListener("click",showActives());
    // completed.addEventListener("click",showCompleted());

    displayTasks();
   
})

// amis vere unda ganvsazgvrot punkciebi gamodzaxebamde,ar vikenebt arrow functions.

// shemogvakvs axali cvladi newTaskis saxelit romelsac gavutolebt
// inputshi chaweril informacias,anu values.vikenebt aseve trims 
// rom chamovachrat zedmeti spaceebi.shemdeg ki vwert logikas,
// rom to newtask ar udris cariel strings,anu tu ik rame weria,
// unda aipushos im cariel arrayshi romelic davweret zemot,todoshi.
// amis mere vidzaxebt funkcias ro es kvelaperi localstorageshi 
// daasaveos da vasuptavebt inputs.calke unda ganisazgvrs dasavebis
//  punkciac da ofc displaytasks
function addTask(){
    const newTask = todoInput.value.trim();
    if (newTask !== ""){
        todo.push(newTask);
        saveToLocalStorage();
        todoInput.value = "";
        displayTasks();
    }
}        


// mivanichot checkboxi,amistvis chvens li tags vuwert nnerhtmls,
// da vutolebt cariel strings.axla foreachit unda gadavurbinot
// kvela axal tasks da mivcet checkbox.foreachs vadzlevt or parametrs
// items da indexs.punkciashi vkmnit axal paragraps

function displayTasks(){
    todoList.innerHTML = "";
    todo.forEach((item,index)=>{
        const p = document.createElement("p");
        p.innerHTML = 
        `
        <div class="todo-container">
        <input type="checkbox" class="todo-checkbox" id="input-${index}"${item.disabled ? "checked" :""} >
        </div> 
        `
        todoList.appendChild(p);

    })

    todoCount.textContent = todo.length;
}




// function clearCompleted(){
    
// }





// function showAll(){

// }






// function showActives(){

// }




// function showCompleted(){

// }





// ganvsazgvrot localsotrage.amistvis pirvel rigshi unda
// shevkmnat chveni todo setitemit,davarkvat saxeli da
// json stringify gamovkenot

function saveToLocalStorage(){
   localStorage.setItem("todo",JSON.stringify(todo))
}