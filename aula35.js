const caixa1=document.querySelector("#caixa1")
const caixa2=document.querySelector("#caixa2")
const btn=document.querySelector("#btn_copiar")

const todosCursos=[...document.querySelectorAll(".curso")]

todosCursos.map((el)=>{
    el.addEventListener("click",(evt)=>{// o paremetro evt traz o evneto do click
        const curso = evt.target// o target traz a referencia do Elemento, ou seja, a propria div ou oque for do HTML
        curso.classList.toggle("destaque")// ele remove, caso tenha a class descrita, ou adiciona, caso nao tenha a classe descrita

    })
})
btn.addEventListener("click",()=>{
    const cursoSel=[...document.querySelectorAll(".destaque")]
    const cursoNotSel=[...document.querySelectorAll(".curso:not(.destaque)")]//:not()funciona para selecionar aqueles que nao tem tal classe
    cursoSel.map((el)=>{
        caixa2.appendChild(el)//apreende o child EL e o solta no caixa2
    })
    cursoNotSel.map((el)=>{
        caixa1.appendChild(el)//apreende o child EL e o solta no caixa2
    })
})