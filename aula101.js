let nome= new String("bruno")//é uma classe de string. ele basicamente cria um objeto com propriedades usando cada caracter

console.log(nome)
consoele.log(typeof(nome))

nome.charAt(0) //rettonrna o caracter do index indicado
nome.charCodeAt(0)// traz o codigo do caracter

nome.concat(canal)//ela so retorna e nao altera por padrao a variavel
nome=nome.concat(canal)//agora sim ele altera a string original

nome.indexOf("u")//procura a primeira posição do que foi indicado e retorna a posição dele, se nao retorna -1
nome.lastIndexOf("u")//procura a ultima

nome.localeCompare(nome2)//compara entre as 2 strings e retonra 1 se a primeira string for maior que a segunda e -1 para o contrario. 0 para iguais

nome.replace("b","p")//só substitui o primeiro|| talvez possa usar um map
//nao so caracter, mas setencas tmb
nome.search("pinho")//procura o valor dado no metodo

nome.slice(6,11)//corta do inicio ate o final dado no index

nome.split(" ")//recorta onde tem o carcter ou setenças dada no parametros

nome.substring(0,4)//ele ignora a ultima posição, entao é até onde oo parametro
nome.substr(6,5)//diferente do de cima ele retorna da posicao inicial ate o valor somado amais do segundo parametro

nome.toUpperCase()//mostra a string toda em maiusculo, mas nao o muda de fato, so  se for atribuido na variavel
nome.toLowerCase()//minuscula
nome.valueOf()// passa o valor dado no contrutor 

num.toString()//mostra no tipo string 

////////////////////////////////

nome.starsWith("pinho")//do tiop boleando, se ela começar com o parametro
nome.endsWith("campos")//mesma coisa oprem no final
nome.includes("nh")//se alguma parte da string tive o parametro, retorna true
nome.repeat(4)//repete a string nas vezes que esta no paramentro
String.fromCodePoint(66,111)//retorna a traduççao do valor de cada caracter|| 66=b

console.log(`nome:${nome}`)//chaveamento de strings
