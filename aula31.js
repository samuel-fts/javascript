const c1=documnet.getElementById("c1")
const c2=documnet.getElementById("c2")
const c3=documnet.getElementById("c3")// pega somente direto poelo ID

const arrayEl=[c1,c2,c3]

const colecaoHTML=[...document.getElementByTagName("div")]//pega uma colecao
//colecaoHTMl=[...colecaoHTMl]//sempre dessa fomra para colocar em array
//spread direto no document é melhor, pois continua sendo uma const
console.log(arrayEl)
console.log(colecaoHTML)

