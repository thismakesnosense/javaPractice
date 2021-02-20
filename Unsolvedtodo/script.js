var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = fetchTodosFromStorage();

function fetchTodosFromStorage(){
   if (localStorage.getItem("todosArray")){
       return JSON.parse(localStorage.getItem("todosArray"));
   }
   return ["Learn HTML", "Learn CSS", "Learn JavaScript"];
};

function addItemToStorage(item){
   let todosFromStorage = fetchTodosFromStorage();
   todosFromStorage.push(item);
   localStorage.setItem("todosArray", JSON.stringify(todosFromStorage));
   todos = fetchTodosFromStorage();
};

function removeFromStorage(item){
    let todosFromStorage = fetchTodosFromStorage();
    todosFromStorage.forEach((todo, index) => {
        console.log(todo === item, "todo === item");
    if (todo === item){
        todosFromStorage.splice(index, 1);
       //  break;
       console.log("to here");
    }

    });
    localStorage.setItem("todosArray", JSON.stringify(todosFromStorage));
    todos = fetchTodosFromStorage();
};

function addTodos(){
    console.log(typeof Number(todoCountSpan.innerHTML), todoCountSpan.innerHTML);
    var initalListContent = "";
    // var count = Number(todoCountSpan.innerHTML);
    // wrapping in Number turns the todoCountSpan from a string to a Number
    for(let i=0;i < todos.length; i++){
        initalListContent += `<li id="${todos[i]}">${todos[i]}<button class="done">complete</button></li>`;
        // count += 1; 
        // count = count plus one can also use count++
    }
    todoList.innerHTML = initalListContent;
    updateCount();
    todoInput.value = "";
    addDeleteListners();
};

function addDeleteListners(){
    //queryselectorall selects all instead of just the first one.
 document.querySelectorAll(".done").forEach(button => {
     button.addEventListener("click",(event) => {
         event.preventDefault();
         
        var ItemToDelete = event.target.parentNode.id;
        removeFromStorage(ItemToDelete);    
         
         event.target.parentNode.remove();
         updateCount();
     })
 })
};

function updateCount(){
    console.log("todosArray: ", todos);
    todoCountSpan.innerHTML = todos.length;
};

function addToArray(){

 todos.push(todoInput.value);
};

addTodos();

todoForm.addEventListener('submit', function(event){
   event.preventDefault();
//    addToArray();
   addItemToStorage(todoInput.value);
   addTodos();
});