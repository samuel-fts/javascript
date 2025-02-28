const nome=Symbol("nome")
const numero=Symbol("nome")
const corUniforme=Symbol("nome")

const Jogador={
    [nome]:"j1",//isso diz que é o do symbol
}

Jogador[numero]=10,//atribui por fora do objeto
Jogador[corUniforme]="amarelo"


for(p in Jogador){//percorre pela propriedade, entao mostrara nome e nao o valor do nome
    console.log(p)//o for nao ocsegue acessar o valor das propriedades Symbols
}

console.log(nome.description)//imprime a descrissao dada no inicio da variavel
console.log(Jogador[nome])//acessa o valor do nome em symbol pois ele passa a ser privado

