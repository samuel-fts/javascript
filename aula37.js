const caixa1=document.querySelector("#caixa1")
const btn_c1=document.querySelector("#c1")
const cursos=[...document.querySelector(".curso")]


caixa1.addEventListener("click",()=>{
    console.log("clickou")
})
cursos.map((el)=>{// mapeou a array criada
    el.addEventListener("click",(evt)=>{//colocou na array el um evento de click, o evento de click passa ao parametro o evento
        evt.stopPropagation()//o evento de cliqeu pasasdo ao parametro evt, foi usado a prorpiedade stop propagation
    })
})
    