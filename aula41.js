const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("#c1_2")

const cursos=["html","css","javascript"]// criei uma array com os textos a serem adicionados em cada div

cursos.map((el,chave)=>{//percorri essa array para maniipular cada um separadamente

    const novoElemento=document.createElement("div")//criei uma variavel para receber e criar uma div para cada no map
    novoElemento.setAttribute("id","c"+chave)//atribuir o atributo de id em cada um de forma crescente e pegando o parametro chave para saber cada posicao
    novoElemento.setAttribute("class","curso c1")//adicionei o atributo de classe em cada 1
    novoElemento.innerHTML=el//dei um innerHTML no paramnetro el para cada unm percorrido receber o html do array
    
    const btn_lixeira=document.createElement("img")
    btn_lixeira.setAttribute("src","./icone_lixeira.png")
    btn_lixeira.setAttribute("class","btn_lixeira")
    novoElemento.appendChild(btn_lixeira)


    btn_lixeira.addEventListener("click",(evt)=>{
        const evento=evt.target
        caixa1.removeChild(evento.parentNode)
    })
    caixa1.appendChild(novoElemento)//append Child vai passar minhhas divs para dentro de caixa1
})
