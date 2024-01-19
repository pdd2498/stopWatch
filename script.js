let milliSecond = 0
let second = 0
let minuts = 0
let hours = 0

let displayTime = document.getElementById("display");
let flage = true;
let time ;

const button =  document.getElementsByClassName("but")[0];
button.addEventListener("click" , ()=>{
    button.classList.toggle('but1')
    if(flage == true){
        flage = false
        watchStart();
    }
    else{
        flage = true
        stop();
    }
})


function settime(){
    milliSecond++

    if(milliSecond == 100){
        second++
        milliSecond = 1;

        if(second == 60){
            minuts++
            second = 1;

            if(minuts == 60){
                minuts = 1;
                hours++
            }
        }
    }const h = hours < 10 ? '0'+hours : hours;
    const m = minuts < 10 ? '0'+minuts : minuts;
    const s = second < 10 ? '0'+second : second;
    const ms = milliSecond < 10 ? '0'+milliSecond : milliSecond;
    displayTime.innerHTML = h+' : '+m+' : '+s+' : '+ms;

}
function watchStart(){
    time = setInterval(settime , 10);
}
function stop(){
    flage = true
    clearInterval(time)
}
document.getElementById("reset").addEventListener("click" , resete)
function resete(){
    
    milliSecond = 0;
    second = 0;
    minuts = 0;
    hours = 0;
    displayTime.innerHTML = '00'+' : '+"00"+' : '+"00"+' : '+"00";
}