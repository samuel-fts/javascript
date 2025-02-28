
class Jogador{
    constructor(){
        this.nome=nome
        this.id=Symbol()//symbol é um identificador unico, quase como um id
    }
}

let jogadores=[new Jogador("j1"), new Jogador("j2"),new Jogador("j3"), new Jogador("j4")]

let s1=jogadores[0].id
let s=[]

let s_jogadores=jogadores.filter((j)=>{//remove o j que for s1 igual a j.id
    return j.id!=s1
})



jogadores=jogadores.filter((j)=>{//atribuia uma variavel e nao o remove do original
    return j.nome!=s1
})

s=s_jogadores.map((j)=>{//percorre pelo s_jogadores e coloca dentro da variavel s o ids do retorno da outra funcao
    return j.id
})

