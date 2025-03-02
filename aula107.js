const carro=document.getElementById("carro")
const btn_esquerda=document.getElementById("btn_esquerda")
const btn_direita=document.getElementById("btn_direita")
const btn_parar=document.getElementById("btn_parar")


const init=()=>{
    console.log("caiu")
    carro.style.position="relative"
    carro.style.left="0px"
    carro.style.width="100px"
    tamMax=window.innerWidth - parseInt(carro.style.width)// coloca na variavel o tanmanho da tela menos os valor do tamanho do carro 
    
}

let anima=null
let tamMax=null
let dir=0

const move=(dire)=>{
    console.log(dire)
    tamMax=window.innerWidth - parseInt(carro.style.width)
    if(dire > 0){
        if(parseInt(carro.style.left) <= tamMax){
            carro.style.left=parseInt(carro.style.left)+(10*dir)+"px" 
            anima=setTimeout(move,20,dir)//set timeout chama a mesma funcao sempre quando acaba, criando assim um loop
        }else{
            dir=-1
            anima=setTimeout(move,20,dir)
              
        }

    }else if(dire < 0){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left=parseInt(carro.style.left)+(10*dir)+"px" 
            anima=setTimeout(move,20,dir)//set timeout chama a mesma funcao sempre quando acaba, criando assim um loop
        }else{
            
            dir=1
            anima=setTimeout(move,20,dir)
            
        }
    }

    
}
btn_parar.addEventListener("click",()=>{
    
        clearTimeout(anima)
    
})

btn_esquerda.addEventListener("click",()=>{
    clearTimeout(anima)
    dir=-1
    anima=setTimeout(move,20,dir)
    // anima=setInterval(move,20,dir)//primeiro parametro do set, recebe a funcao que deve ser chamada, o segundo recebe o tempo em milissegundos, a terceira recebe o valor que entrara no paramentro da funcao chamada
    // carro.style.left=parseInt(carro.style.left) - 10 +"px"// mesma coisa do de baixo, porem de forma mais reduzida
})
btn_direita.addEventListener("click",()=>{
    clearTimeout(anima)
    dir=1
    anima=setTimeout(move,20,dir)
    // anima=setInterval(move,20,dir)
    // let pos =parseInt(carro.style.left) 
    // pos = pos + 10
    // carro.style=`position:relative;left:${pos}px;`
})

window.onload=init//ao carregar a janela o init será chamado
window.addEventListener("resize",()=>{// toda vez que for redimensionado, será posto o novo valor de tamnho na variavel
    if(tamMax > window.innerWidth - parseInt(carro.style.width)){
        clearTimeout(anima)
        // dir=-1
        tamMax=window.innerWidth
        move(dir)
    }else if(tamMax < window.innerWidth - parseInt(carro.style.width)){
        clearTimeout(anima)
        tamMax=window.innerWidth
        move(dir)
    }
    
    
})