const caixa=document.querySelector("#caixa")

let mapa=new Map()//é uma colecao, parecida com array, onde de tem o nome da posicao e o valor
let pes = 2

mapa.set("curso","java")//adiciona no map
mapa.size//pega o tamanho
mapa.get(pes)//ele obtem o valor da posicao escrita no parametro
mapa.delete(1)// deleta

if(mapa.has("canal")){
    console.log("nao existe")
}else{
    console.log("nao existe")
}

caixa.innerHTML=mapa.get("curso")
mapa.foRach((el)=>{//percorre por toda a colecao. igual o map, sempre repetindo a duncao pelo tamanho da colecao
    console.log(el)
})