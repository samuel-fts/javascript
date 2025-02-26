import c from "./contatos.js"
const listaContatos=document.getElementById("listaContatos")
const btn_gravar=document.getElementById("btn_gravar")
const btn_remove=document.getElementById("btn_remove")

btn_remove.addEventListener("click",(evt)=>{
    let value={
        nome:document.getElementById("f_nome").value,
        telefone:document.getElementById("f_telefone").value,
        email:document.getElementById("f_email").value,
    }
    c.removeContato(value)
})

btn_gravar.addEventListener("click",(evt)=>{
    const cont={
        nome:document.getElementById("f_nome").value,
        telefone:document.getElementById("f_telefone").value,
        email:document.getElementById("f_email").value,
    }
    c.addContato(cont,listaContatos)
})