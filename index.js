var sec=0
var min=0
var hrs=0
var interval


function Iniciar(){
    timer()
    interval= setInterval(timer,1000)
}

function Pausar(){
    clearInterval(interval)
}

function Parar(){
    clearInterval(interval)
    sec=0
    min=0
    hrs=0
    document.getElementById("Relogio").innerText='00:00:00'
}

function limitar(digito){
    if(digito<10){
        return('0'+digito)   
    }else{
        return(digito)
    }
}



function timer(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hrs++
        }
    }
    document.getElementById("Relogio").innerText=limitar(hrs)+':'+limitar(min)+':'+limitar(sec)
}