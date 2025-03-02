const q1=document.getElementById("q1")
const q2=document.getElementById("q2")
const posx=document.getElementById("posx")
const posy=document.getElementById("posy")
const largura=document.getElementById("largura")
const altura=document.getElementById("altura")

q1.accessKey="b"//usa o teclado como click segurando o alt
q2.accessKey="n"

console.log(q2.acessKey)

const info=(el)=>{
    let DOMrect_q = el.getBoundingClientRect()//mostra todas as informações de tamanho e position


    posx.innerHTML=`posx:${DOMrect_q.x}`
    posy.innerHTML=`posy:${DOMrect_q.y}`
    largura.innerHTML=`largura:${DOMrect_q.width}`
    altura.innerHTML=`altura${DOMrect_q.height}`

}
    
q1.addEventListener("click",(evt)=>{
    info(evt.target)
})
q2.addEventListener("click",(evt)=>{
    info(evt.target)
})
