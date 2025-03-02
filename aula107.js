const carro=document.getElementById("carro")
const btn_esquerda=document.getElementById("btn_esquerda")
const btn_direita=document.getElementById("btn_direita")


const init=()=>{
    console.log("caiu")
    carro.style.position="relative"
    carro.style.left="0px"
    
}

let anima=null

const move=(dir)=>{
    carro.style.left=parseInt(carro.style.left)+(10*dir)+"px"
}

btn_esquerda.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(move,20,-1)//primeiro parametro do set, recebe a funcao que deve ser chamada, o segundo recebe o tempo em milissegundos, a terceira recebe o valor que entrara no paramentro da funcao chamada
    carro.style.left=parseInt(carro.style.left) - 10 +"px"// mesma coisa do de baixo, porem de forma mais reduzida
})
btn_direita.addEventListener("click",()=>{
    clearInterval(anima)
    anima=setInterval(move,20,1)
    let pos =parseInt(carro.style.left) 
    pos = pos + 10
    carro.style=`position:relative;left:${pos}px;`
})

window.onload=init//ao carregar a janela o init será chamado