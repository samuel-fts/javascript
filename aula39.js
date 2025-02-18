const caixa1 = document.querySelector("#caixa")
const btn_c = [...document.querySelectorAll(".curso")]
const c1 = document.querySelector("#c1_2")

console.log(c1_2.parentElement)// retorna o pai do elemnto
console.log(c1_2.parentNode)//tmb retorna o pai do elemento
console.log(c1_2.parentNode.parentNode)// retorna o pai do pai, ou seja, o avô
console.log(c1_2.parentNode.parentNode.children[4])// retorna o pai do pai e depois o filho da posicao 4, ou seja o tio

console.log(caixa1.hasChildNodes())//verifica se tem ou nao filho--mostra true ou false
console.log(btn_c[0].hasChildNodes())//verifica se tem ou nao filho--mostra true ou false
console.log(btn_c[0].ChildNodes)//mostra os filhos desse elemento

console.log(caixa1.children.length > 0 ? "possui filhos" : "nao possui filhos")//mesma coisa de usar o if e else, porem de forma mais simples com o oeprador ternario

caixa1.firstElementChild.innerHTML="teste"//mudar o conteudo do elemento com inner 
caixa1.children[1].innerHTML="teste"// manipular o conteudo do elememto com posicao definida

