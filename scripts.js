//funktion til test at indhold af localStorage

let name = "test";
let password = "1234";
let buttonElement = document.querySelector("#ok");
let globalDiv= document.querySelector("#clear");


buttonElement.addEventListener("click", function(event){
    event.preventDefault();
    let input1 = document.querySelector("#Username").value;
    let input2 = document.querySelector("#Password").value;
    clearcontent();

    if((input1==name)&&(input2==password)){
       welcome();
       document.createElement("knap mangæer");
    }
    else{
        wrong();
    }

});

    function clearcontent() { 
        globalDiv.innerHTML = "";
    };

    function welcome(){
        let newPage = document.createTextNode("Welcome - YOU ARE IN!!!");
        globalDiv.appendChild(newPage);

    }

    function wrong(){
        let newPage = document.createTextNode("Not Good - somthing wrong!!!");
        globalDiv.appendChild(newPage);

    }
