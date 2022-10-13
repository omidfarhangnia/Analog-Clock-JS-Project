// adding width and height to the container
window.addEventListener("load" , PutClockDimension);
window.addEventListener("load" , ChangeClockTransition);
window.addEventListener("resize" , PutClockDimension);

var ANALOG__CLOCK = document.getElementById("Analog__Clock");
var PresentTime = new Date() , PresentSecondClone;
var PresentHour = PresentTime.getHours();
var PresentMinute = PresentTime.getMinutes();
var PresentSecond =  PresentTime.getSeconds();
const HOUR__ARROW = document.querySelector(".hour__arrow--container");
const MINUTE__ARROW = document.querySelector(".minute__arrow--container");
const SECOND__ARROW = document.querySelector(".second__arrow--container");

function ChangeClockTransition(){
    setTimeout(() => {
        var ARROW__CONTAINERS = [HOUR__ARROW , MINUTE__ARROW , SECOND__ARROW];
        for(var i = 0; i < ARROW__CONTAINERS.length; i++){
            ARROW__CONTAINERS[i].style.transition = "all .05s ease-in-out";
        }
    }, 1200);
}

function PutClockDimension(){
    var WINDOW__WIDTH = window.innerWidth;
    if(WINDOW__WIDTH > 700){
        ANALOG__CLOCK.style.width = `630px`;
        ANALOG__CLOCK.style.height = `630px`;        
    }else{
        ANALOG__CLOCK.style.width = `${(WINDOW__WIDTH / 5) * 4}px`;
        ANALOG__CLOCK.style.height = `${(WINDOW__WIDTH / 5) * 4}px`;
    };   
}

setInterval(() => {
    PresentSecond += 1;
    PresentSecondClone = PresentSecond;
    // i need to have present second and minute in the other variables because i should change their value but i cant chang the value of main values
    if((PresentSecondClone == 60) >= 1){
        PresentMinute += 1;
        PresentSecondClone = 0;
    }
    SecondArrowMove(PresentSecond);
    MinuteArrowMove(PresentMinute);
    HourArrowMove(PresentHour , PresentMinute);
}, 1000);

function HourArrowMove(PresentHour , PresentMinute){
    if(PresentHour > 12){
        PresentHour -= 12;
    }
    HOUR__ARROW.style.rotate = `${((PresentHour * 30) + (PresentMinute / 2))}deg`;
    // 30 = 360 / 12
}
function MinuteArrowMove(PresentMinute){
    MINUTE__ARROW.style.rotate = `${(PresentMinute * 6)}deg`;
    // 6 = for every minute we have 6 degree
}
function SecondArrowMove(PresentSecond){
    SECOND__ARROW.style.rotate = `${(PresentSecond * 6)}deg`;
    // 6 = for every second we have 6 degree
}