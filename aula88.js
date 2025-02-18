const btn_alert=document.getElementById("btn_alert")
const btn_confirm=document.getElementById("btn_confirm")
const btn_prompt=document.getElementById("btn_prompt")

btn_alert.addEventListener("click",(evt)=>{
    alert("olá! como vc está?")
})

btn_confirm.addEventListener("click",(evt)=>{
    const retorno = confirm("voce esta aprendendo muito?")
    console.log(retorno)
})  

btn_prompt.addEventListener("click",(evt)=>{
    const res = prompt("Digite seu nome","digite seu nome aqui")
    console.log(res)
})

/*function samuel3(){//funcao normal

}

const samuel= function(){// anonima

}

const samuel2 = ()=>{arrow function

}*/