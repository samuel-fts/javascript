const p_array=document.querySelector("#array")
45const resultado=document.querySelector("#resultado")

const elementos_array=[10,5,8,2,9,15,20]
p_array.innerHTML ="[" +elementos_array+"]"

btnVerificar.addEventListener("click",(evt)=>{
    const ret = elementos_array.some((e,i)=>{// ou everry que serve se tiver todos respeiatndo a regra
        if(e<=18){
            resultado.innerHTML="array nao conforme"        
        }
        return e>=18
    })
    if(ret){
        resultado.innerHTML="OK"
    }
})

const elementos_array_2 = [1,2,3,4,5]
let ant=[]
let atu=[]

p_array.innerHTML ="[" +elementos_array+"]"

btnReduzir.addEventListener("click",(evt)=>{
    elementos_array.reduce((anterior, atual,pos )=>{//guarda o retorno do valor anterior, atual e a posicao dele
        ant.push(anterior)
        atu.push(atual)
        return atual+anterior
    })
})