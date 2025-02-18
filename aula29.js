function aluno(nome, nota){
   this.nome=nome
   this.nota=nota

   this.dados_anonimo=function(){
    setTimeout(function(){// function normais nao conseguem pegar this.nome de fora da sessao dentro de um timeout 
        conosle.log(this.nome)
    },3000)
   }

   this.dados_arrow=function(){//As arrow functions não possuem seu próprio escopo this. Em vez disso, elas herdam o valor do this do contexto em que foram definidas
    setTimeout(()=>{// trocando para uma arrow function, resolve esse problema
        conosle.log(this.nome)
    },3000)
   }
}
const al1=new aluno("samuel", 100)