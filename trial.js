var button= document.getElementById("todobutton");
var input= document.getElementById("todolist");
var ul=document.querySelector("ul");

function inputlength() {
    return input.value.length;
    
}

function createListElement() {
    var li= document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value= "";

    
}

button.addEventListener ("click", function(){
    if (inputlength > 0){ createListElement();
    }
    
});

input.addEventListener ("keypress", function(event){
    if(inputlength()> 0 && event.keyCode===13)
  { createListElement();}
    
});