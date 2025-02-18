let  cursos=["html","css","java"]
let cores=["verde","azul", cursos]//matriz arrays dentro de arrays

const caixa=document.getElementById("caixa")
console.log(cursos[0])

cursos.push("c++")//ele acrescenta o valor no array no final
cursos.pop("c++")//ele tira o valor escrito ou o do final caso esteja vazio
cursos.unshift("csss")//ele cria no inicio
cursos.shift("python")// ele tira do final

cursos.map((el)=>{
    let p = document.createElement("p")
    p.innerHTML=el
    caixa.appendChild(p)
})