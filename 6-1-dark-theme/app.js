const darkbtn = document.querySelectorAll("button")[0];
const newBody = document.body;

darkbtn.addEventListener("click" , function(){
    darkbtn.classList.toggle("dark");
    newBody.classList.toggle("dark-mode");

    if(darkbtn.classList.contains("dark")){        
        darkbtn.innerText = "Light Mode"
    }
    else{
        darkbtn.innerText = "Dark Mod";

    }  
    console.log(newBody);
    
});