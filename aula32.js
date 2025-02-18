const cursosTodos=[...document.getElementByClassname("curso")]
const c1=[...document.getElementByClassname("c1")]
const c2=[...document.getElementByClassname("c2")]
const cursoEspecial=document.getElementByClassName("curso")[0]//posso escolher a classe pela posicao dela


console.log(cursosTodos)
console.log(c1)
console.log(c2)

cursoTodos.map((el)=>{
    el.classList.add("destaque")//classList abre opcoes para mudancas em classes. add acrescnta classe
})
c1.map((el)=>{
    el.classList.add("destaque")//classList abre opcoes para mudancas em classes. add acrescnta classe
})