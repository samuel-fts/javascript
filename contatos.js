import { contatos } from "./bancoContatos.js";

let contato={// um objeto
    getTodosContatos:function(){
        return contatos 
    },
    getContato:function(i_cont){
        return contatos[i_cont]
    },

    removeContato:function(value){
        contatos = contatos.filter((e)=>{
            console.log(value.nome)
            if(value.nome === e.nome && value.telefone === e.telefone && value.email === e.email){
                  console.log("entropu auqwi")
                return false
            }else{
                console.log("entropu auqw2i")
                return true
            }
        })
      
        console.log(contatos)
        
    },

    addContato:function(novoContato,destinoDOM){
        const cont={
            nome:novoContato.nome,
            telefone:novoContato.telefone,
            email:novoContato.email
        }

        
        

        contatos.push(cont)

        destinoDOM.innerHTML=""

        contatos.forEach((c)=>{
            const div=document.createElement("div")
            div.setAttribute("class", "contato")
            const p_nome=document.createElement("p")
            p_nome.innerHTML=c.nome
            const p_telefone=document.createElement("p")
            p_nome.innerHTML=c.telefone
            const p_mail=document.createElement("p")
            p_nome.innerHTML=c.email
            div.appendChild(p_nome)
            div.appendChild(p_telefone)
            div.appendChild(p_mail)
            destinoDOM.appendChild(div)
        })
        console.log(contatos)
    }
}

export default contato