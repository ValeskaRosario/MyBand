// document.querySelector("button").addEventListener("click",buttonClick);

// function buttonClick(){
//     alert("Button clicked");
// }
//detecting button press
var audio= new Audio('sou')
var numnberOFDrumButton=document.querySelectorAll(".drum").length;
for (var i =0; i<numnberOFDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInnerHTML=this.innerHTML;
       makesound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML) 
    });    
}
//detecting keyboard press
document.addEventListener("keypress",function(){
    makesound(event.key);
    buttonAnimation(event.key);
});
var key=this.document.addEventListener("keypress");

function makesound(key){
    switch (key) {
        case "w":
           var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();  
            break;
        case "a":
            var t2= new Audio("sounds/tom-2.mp3");
            t2.play(); 
            break;
        case "s":
            var t3= new Audio("sounds/tom-3.mp3");
            t3.play(); 
            break;           
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;
        case "j":
            var snar= new Audio("sounds/snare.mp3");
            snar.play(); 
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play(); 
            break;
        case "l":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            break;
        default:console.log(buttonInnerHTML);
            break;
    }
}


function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." +currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },200)
}