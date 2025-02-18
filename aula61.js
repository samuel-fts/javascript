const Pessoa={
    nome,
    idade,
    getNome: function(){
        return this.nome
    },
    getIdade: function(){
        return this.idade
    },
    setNome: function(nome){
        this.nome=nome
    },
    setIdade: function(idade){
        this.idade=idade
    },
}
const InNome=document.querySelector("#Input_nome")
const InIdade=document.querySelector("#Input_idade")
const btn_add=document.querySelector("#btn_add")
const caixa=docuent.querySelector("#caixa")

p1=Pessoa

btn_add.addEventListener("click",(evt)=>{
    p1.setIdade()=""
    p1.setNome()=""
        function btn(){
            p1.setNome(InNome.value)
            p1.setIdade(InIdade.value)
            let info_nome=getNome()
            let info_idade=getIdade()
            
            const div=document.createElement("div")
            div.setAttribute="resultado"
            div=document.innerHTML(info_nome, info_idade)

            caixa.appeendChild(div)

            
        }
    btn()


})
