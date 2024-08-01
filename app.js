let btn = document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click" ,function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText =  "Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);

    ul.appendChild(item);
    inp.value =" "; // to reset the input

});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == 'BUTTON'){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});y696363639956666666666666666
