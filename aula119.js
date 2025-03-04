const f_nome=document.querySelector("#f_nome")
const f_nota=document.querySelector("#f_nota")
const f_msg=document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click",(evt)=>{
    evt.preventDefault()//faz nao executar o submite ao apertar no botao
    let estadoV = f_nota.validity

    if(estadoV.valueMissing ){
 /*ele valida uma serie de parametros, se alguma nao estiver de acordo, entra no escopo do if*/
        f_nota.setCustomValidity("este campo é obrigatório")// mostra msg padroes para msgs
    }else if(estadoV.rangeOverflow){
        f_nota.setCustomValidity("nota muito alta")//
    }else if(estadoV.rangeUnderflow){
        f_nota.setCustomValidity("nota muito baixa")//
    }
    f_msg.innerHTML=f_nota.reportValidity()
    f_nota.reportValidity()

    

    f_mdg.innerHTML = msg
})

