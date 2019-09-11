//funktion til test at indhold af localStorage

let name = "test";
let password = "1234";
let buttonElement = document.querySelector("#ok");
let globalDiv= document.querySelector("#clear");

if (localStorage != "" && localStorage.length >0){
    
    let oldUser = localStorage.getItem("username");
    let oldPass = localStorage.getItem("password");
     
    if ((oldUser=name) && (oldPass= password)){
        clearcontent();
        welcome();}
    else {
         inputcheck();}
    
}

else{   
inputcheck();}    


    function inputcheck(){
        buttonElement.addEventListener("click", function(event){
        event.preventDefault();
        let input1 = document.querySelector("#Username").value;
        let input2 = document.querySelector("#Password").value;
        localStorage.setItem("username", input1);
        localStorage.setItem("password", input2);
                
        clearcontent();

        if((input1==name)&&(input2==password)){
            welcome();      
            }

        else{

            if((input1!=name)&&(input2!=password)){
                wrong();    
                        }
            if((input1==name)&&(input2!= password)){
                wrong1();
                        }
            if((input1!=name)&&(input2==password)){
                wrong2();
                        }
                        
        }          
     });
    }

    function clearcontent() { 
        globalDiv.innerHTML = "";
    }


    function welcome(){
        
        let newPage = document.createTextNode("Welcome - YOU ARE IN!!!\n");
        globalDiv.appendChild(newPage);
        let picture= document.createElement("video");
        picture.loop = true;
        let source = document.createElement("source");
        source.src = "img/happy man.mp4";
        picture.type ="video/mp4";
        picture.appendChild(source);
        picture.width="240"; picture.height="320";
        picture.autoplay ="true";
        globalDiv.appendChild(picture);

        let returnButton = document.createElement("BUTTON");
        globalDiv.appendChild(returnButton);
        let textToButton = document.createTextNode("Return to Main");
        returnButton.id="mainBut";
        returnButton.appendChild(textToButton);
        let buttonElement2=document.querySelector("#mainBut");
        buttonElement2.addEventListener("click", function(event){
            event.preventDefault();
            localStorage.clear();
            location.reload();
        });   

    }

    function homeButton(){
        let homeButton = document.createElement("BUTTON");
        globalDiv.appendChild(homeButton);
        let textToButton = document.createTextNode("Return to Main");
        homeButton.appendChild(textToButton);
        
        homeButton.addEventListener("click", function(event){
        event.preventDefault();
        localStorage.clear();
        location.reload();
        });
    }

    function wrong(){
        let newPage = document.createTextNode("Both name and password are wrong!");
        globalDiv.appendChild(newPage);
        homeButton();
        
    }


    function wrong1(){
        let newPage = document.createTextNode("The password is wrong!");
        globalDiv.appendChild(newPage);
        homeButton();
    }


    function wrong2(){
        let newPage = document.createTextNode("The name is wrong!");
        globalDiv.appendChild(newPage);
        homeButton();
    }

