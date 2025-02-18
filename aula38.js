const caixa1=document.querySelector("#caixa1")
const btn_c=[...document.querySelectorAll(".curso")]

console.log(document.getRootNode())//mostra o documneto raiz
console.log(btn_c[0].getRootNode())//montra o domuento raiz da array btn, posicao 0
console.log(btn_c[0].ownerDocument)//mostra o dono do elemento btn na posicao 0 da array

console.log(caixa1.children[0])//mostra qual o filho desse lemento esta na posicao 0
console.log(caixa1.lastElementChild)//mostra o ultimo filho desse elemento
console.log(caixa1.firstElementChild)//mostra 0o primeiro filho desse elemento


