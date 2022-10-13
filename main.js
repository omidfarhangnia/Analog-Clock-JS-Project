// adding width and height to the container
window.addEventListener("load" , PutClockDimension);
window.addEventListener("resize" , PutClockDimension);

function PutClockDimension(){
    var WINDOW__WIDTH = window.innerWidth;
    var ANALOG__CLOCK = document.getElementById("Analog__Clock")
    if(WINDOW__WIDTH > 700){
        ANALOG__CLOCK.style.width = `630px`;
        ANALOG__CLOCK.style.height = `630px`;        
    }else{
        ANALOG__CLOCK.style.width = `${(WINDOW__WIDTH / 5) * 4}px`;
        ANALOG__CLOCK.style.height = `${(WINDOW__WIDTH / 5) * 4}px`;
    };   
}

var PresentTime = new Date() , PresentSecondClone;
var PresentHour = PresentTime.getHours();
var PresentMinute = PresentTime.getMinutes();
var PresentSecond =  PresentTime.getSeconds();
const HOUR__ARROW = document.querySelector(".hour__arrow--container");
const MINUTE__ARROW = document.querySelector(".minute__arrow--container");
const SECOND__ARROW = document.querySelector(".second__arrow--container");

setInterval(() => {
    PresentSecond += 1;
    PresentSecondClone = PresentSecond;
    if((PresentSecondClone == 60) >= 1){
        PresentMinute += 1;
        PresentSecondClone = 0;
    }
    SecondArrowMove(PresentSecond);
    MinuteArrowMove(PresentMinute);
    console.log(PresentMinute)
}, 1000);

function HourArrowMove(){
    
}
function MinuteArrowMove(PresentMinute){
    MINUTE__ARROW.style.rotate = `${(PresentMinute * 6) + 90}deg`;
}
function SecondArrowMove(PresentSecond){
    SECOND__ARROW.style.rotate = `${(PresentSecond * 6) + 90}deg`;
}