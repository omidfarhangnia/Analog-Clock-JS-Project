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