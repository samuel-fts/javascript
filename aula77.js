const div_data=document.getElementById("div_data")
const div_relogio=document;getElementById("div_relogio")

const data= new Date()

let dia=data.getDate()
dia=dia<10?"0"+dia:dia

let mes=data.getMonth()
mes=mes<10?"0"+mes:mes

const data_r=dia+"/"+mes+"/"+data.getFullYear()

div_dara.innerHTMl=data_r

const relogio=()=>{//function anonima arrow
    const data=new Date()
    let hora=data.getHours()
    hora=hora<10?"0"+hora:hora

    let minuto=data.getMinutes()
    minuto=minuto<10?"0"+minuto:minueto

    let second=data.getSeconds()
    second=second<10?"0"+second:second

    const hora_format=hora+":"+minuto+":"+second
    div_relogio.innerHTMl=hora_format
}

const intervalo=setInterval(relogio,1000)// ele chama a function do primeirop parametro a cada segubdo ou valor dado no segundo parametro


console.log(new Date.now())// Timestamp



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
