const c1=docmunet.getElementById("c1")//opera a variavel de acordo conm a id tirada do DOM
const c2=document.getElementById("c2")

console.log(c1)
console.log(c1.id)
console.log(c1.innerHTML)

c1.innerHTML="SOMOEL"

const arrayel=[c1,c2]

// for(d of arrayel){
//     d.innerHTML="SAMEUO"
// }

arrayel.map((e)=>{// percorre pela arary de forma melhor
    e.innerHTML="sumuel"
    console.log(e)
})
//nao precisamos do spread pq nos mesmos definmos o array