const audio = new AudioContext();

if (Notification.permission === "default"){
    Notification.requestPermission();
}
else if (Notification.permission === "denied"){
    alert("Notification is turned off.\n\nTo get notified on the end of timer TURN ON THE NOTIFICATION");
}

const timerFields = document.querySelectorAll(".timeunit");

timerFields.forEach(function(field){
    field.addEventListener("focus",function(e){
        setTimeout(function(){
            placeCursorAtEnd(field);
        },0);
    })
    
    field.addEventListener("click",function(e){
        setTimeout(function(){
            placeCursorAtEnd(field);
        },0);
    })
    
    field.addEventListener('input', function(e) {
        let val = field.innerText.replace(/[^0-9]/g, '');
        val = val.slice(-2);

        if ((!field.classList.contains("hour")) && (Number(val) > 59)) {
            val = "59";
        }

        if (field.innerText !== val) {
            field.innerText = val;
            placeCursorAtEnd(field);
        }
    });

    field.addEventListener('keydown',function(e){
        const allowedkeys = ["Backspace","Delete","Tab"];
        
        if (allowedkeys.includes(e.key)) return;
        
        let cur_val = field.innerText.trim();
        
        if (e.key >= "0" && e.key <= "9"){
            e.preventDefault();
            
            let new_val = cur_val + e.key;
            
            new_val = new_val.slice(-2);
            
            if ((!field.classList.contains("hour")) && (Number(new_val) > 59)){
                new_val = 59;
            }
            
            field.innerText = new_val;
            
            placeCursorAtEnd(field);
        }
        else if (e.key === "ArrowUp"){
            let add = 1;
            
            if ((!field.classList.contains("hour")) && (Number(cur_val) == 59)){
                add = 0;
            }
            else if((Number(cur_val) == 99)){
                add = 0;
            }
            
            let new_val = (Number(cur_val)+add).toString();
            
            if (new_val.length === 1){
                new_val = "0" + new_val;
            }
            
            field.innerText = new_val;
            
            e.preventDefault();
            placeCursorAtEnd(field);
        }
        else if (e.key === "ArrowDown"){
            let sub = 1;
            
            if((Number(cur_val) == 0)){
                sub = 0;
            }
            
            let new_val = (Number(cur_val)-sub).toString();
            
            if (new_val.length === 1){
                new_val = "0" + new_val;
            }
            
            field.innerText = new_val;
            
            e.preventDefault();
            placeCursorAtEnd(field);
        }
        else{
            e.preventDefault();
        }
    })
    
    field.addEventListener("blur",function(){
        const val = field.innerText;
        if (val.length === 0 || val === '\n'){
            field.innerText = "00";
        }
        else if (val.length === 1){
            console.log(val)
            field.innerText = "0" + val;
        }
    })
})

function placeCursorAtEnd(element){
    element.focus();
    document.getSelection().collapse(element,element.childNodes.length);
}

function singlebeep(delay = 0){
    const osc = audio.createOscillator();
    
    osc.connect(audio.destination)

    osc.type = "square";
    osc.frequency.value = 600;

    osc.start(audio.currentTime + delay);
    osc.stop(audio.currentTime + delay + 0.1)
}

function doublebeep(){
    singlebeep();
    singlebeep(0.2);
}

function sendNotification(){
    if (Notification.permission === "granted"){
            new Notification("Timer",{
                body : "Timer Finished"
            })
        }
}
let cd, time, beep;
const buttons = document.querySelectorAll(".btn")

function updatetimer(){
    let hour = (Math.floor(time / 3600)).toString();
    let minute = (Math.floor((time % 3600) / 60)).toString();
    let second = (time % 60).toString();
    
    timerFields[0].innerText = (hour < 10)? ("0" + hour) : hour;
    timerFields[1].innerText = (minute < 10)? ("0" + minute) : minute;
    timerFields[2].innerText = (second < 10)? ("0" + second) : second;
}

function countdown(){
    if (time === 0){
        clearInterval(cd);
        
        buttons.forEach(function(button){
            if (button.classList.contains("reset")) button.style.display = "";
            else button.style.display = "none";
        })

        beep = setInterval(doublebeep,1000);

        sendNotification();

        return;
    } 
    time--;
    updatetimer(time);
}

function start(){
    let hour = Number(timerFields[0].innerText);
    let minute = Number(timerFields[1].innerText);
    let second = Number(timerFields[2].innerText);
    
    time = hour*3600 + minute*60 + second;
    
    if (time !== 0){
        
        buttons.forEach(function(button){
            if (button.classList.contains("start")) button.style.display = "none";
            else button.style.display = "";
        })

        timerFields.forEach(function(field){
            field.setAttribute("contenteditable","false");
        })

        cd = setInterval(countdown, 1000);
    }

}

function stop(){
    buttons.forEach(function(button){
        clearInterval(cd);

        if (button.classList.contains("stop")) button.style.display = "none";
        else button.style.display = "";
    })
}

function reset(){
    clearInterval(cd);
    time = 0;
    updatetimer();
    
    clearInterval(beep);

    buttons.forEach(function(button){
        if (button.classList.contains("start")) button.style.display = "";
        else button.style.display = "none";
    })

    timerFields.forEach(function(field){
        field.setAttribute("contenteditable","true");
    })


}
