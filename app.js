
(function(){

/** HTML ELEMENT */
let timerElement = document.querySelector(".timer");
let resetBtn= document.querySelector(".btn.reset");
let buttons= [...document.querySelectorAll(".btn") ];

let stopBtn= document.querySelector(".btn.stop");


//global var
let timer;
let second= 0;
let minute= 0;
let hour= 0;

 
/**  EVENT LISTENER  */
buttons.forEach(button=>{
    button.addEventListener("click", ()=>{
        button.classList.contains("start") && startTimer();
       button.classList.contains("stop") && stopTimer();  
       button.classList.contains("reset") && resetTimer();  
    });
})

/** LOGIC TIME */
function timerHandler(){
    //increment every second it run
        second++;
        if( second === 60){
            second= 0;
            minute++;
        }
        if( minute === 60){
            minute= 0;
            hour++;
        }
        displayTime(second,minute, hour);
    };

/** BUTTONS FUNCTIONALITIES */
function startTimer(){
    // class for stop btn element
    stopBtn.classList.remove("inactive") ;
  
    timer = setInterval(timerHandler, 1000);
    resetBtn.disabled= true; 
    return timer;
}
function stopTimer(){

    timer =  clearInterval(timer);
    resetBtn.disabled= false; 
  
   
}
function resetTimer(){
    timer =  clearInterval(timer);
    resetBtn.disabled= true; 
    stopBtn.classList.add("inactive") ;
 
    //reset time
     second= 0;
     minute= 0;
     hour= 0;
 
     displayTime(second,minute, hour);
}



/** FORMAT TIME */
function displayTime(second,minute, hour){
    
    let secondFormat= second;
    let minuteFormat = minute;  
    let hourFormat = hour;

   second < 10 &&  (secondFormat = `0${second}`);
    minute < 10 &&  (minuteFormat = `0${minute}`);
    hour   < 10 && (hourFormat = `0${hour}`);

    timerElement.innerHTML= `${hourFormat}:${minuteFormat}:${secondFormat}`;
}
})();
