const div_data=document.getElementById("div_data")
const div_relogio=document.getElementById("div_relogio")
const btn_ativar=document.getElementById("btn_ativar")
const btn_parar=document.getElementById("btn_parar")
const tmp_alarme=document.getElementById("tmp_alarme")
const hora_alarme=document.getElementById("hora_alarme")
const timer=document.getElementById("timer")

const som_alarme= new Audio("alarme.mp3")
som_alarme.loop=-1

let ts_atual=null
let ts_alarme=null
let alarme_ativado=false
let alarme_tocando=false




    
   


btn_ativar.addEventListener("click",()=>{
    ts_atual=Date.now()
    ts_alarme=ts_atual+(tmp_alarme.value*1000)
    alarme_ativado=true
    const dt_alarme=new Date(ts_alarme)

    let hora=dt_alarme.getHours()
    hora=hora<10?"0"+hora:hora

    let minute=dt_alarme.getMinutes()
    minute=minute<10?"0"+minute:minute

    let seconds=dt_alarme.getSeconds()
    seconds=seconds<10?"0"+seconds:seconds

    hora_alarme.innerHTML="Hora do alarme:"+hora+":"+minute+":"+seconds
})




const data= new Date()

let dia=data.getDate()
dia=dia<10?"0"+dia:dia

let mes=data.getMonth()
mes=mes<10?"0"+mes:mes

const data_r=dia+"/"+mes+"/"+data.getFullYear()

div_data.innerHTML=data_r



    



const relogio=()=>{//function anonima arrow
    const data=new Date()
    let hora=data.getHours()
    hora=hora<10?"0"+hora:hora

    let minuto=data.getMinutes()
    minuto=minuto<10?"0"+minuto:minuto

    let second=data.getSeconds()
    second=second<10?"0"+second:second

    const hora_format=hora+":"+minuto+":"+second
    div_relogio.innerHTML=hora_format

    if(alarme_ativado && !alarme_tocando){
        if(data.getTime() >= ts_alarme){
            alarme_tocando=true
            som_alarme.play()
            for(i=0;i<20;i++){
                let rept = setInterval(() => {
                console.log("deu certo 2")
                timer.classList.toggle("alarme") 
                }, 500);
            }
                parar_repetir=()=>{
                    clearInterval(rept)
                }
        
        }
    }
}


btn_parar.addEventListener("click",()=>{

    alarme_ativado=false
    alarme_tocando=false

    hora_alarme.innerHTML="Hora do alarme:"
    tmp_alarme.value=0
    timer.classList.remove("alarme")
    som_alarme.pause();
    som_alarme.currentTime=0;
    parar_repetir()

})
const intervalo=setInterval(relogio,1000)// ele chama a function do primeirop parametro a cada segubdo ou valor dado no segundo parametro


//console.log(new Date.now())// Timestamp



//getDate()-- dia do mes
/*getDay() = Dia da semana(numero)
getFullYear()=Ano com 4 digitos
getHours() = Horas
getMliliseconds() = milissegundos
getMinutes minutos
getMonth mes
getSecond segundos
getTime timesatamp(milisegndo desde 1 de janeiro de 1970)
Date.now timesatamp(milisegndo desde 1 de janeiro de 1970)
getTimezoneOffset timezone da localidade
setDate define um dia do mes para a data
setMonth define o mes
setFullYear define um ano para a dta
setHours define horas
setMinute define minutos
setSeconds define segundos
setMillisecond define m,ilissigundos
toDateString   retorna somente a dataTODOOOSS SAO UM METODO*/ 
