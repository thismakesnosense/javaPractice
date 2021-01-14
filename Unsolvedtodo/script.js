var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function addTodos(){
    console.log(typeof Number(todoCountSpan.innerHTML), todoCountSpan.innerHTML);
    var initalListContent = "";
    // var count = Number(todoCountSpan.innerHTML);
    // wrapping in Number turns the todoCountSpan from a string to a Number
    for(let i=0;i < todos.length; i++){
        initalListContent += `<li>${todos[i]}</li>`;
        // count += 1; 
        // count = count plus one can also use count++
    }
    todoList.innerHTML = initalListContent;
    todoCountSpan.innerHTML = todos.length;
    todoInput.value = "";
};

function addToArray(){

 todos.push(todoInput.value);
};

addTodos();

todoForm.addEventListener('submit', function(event){
   event.preventDefault();
   addToArray();
   addTodos();
});