let nome = new String("samuel")
let no = new String("sa")
console.log(typeof(nome))

nome.charAt(0)
nome.charCodeAt(0)
nome.concat(no)
nome.indexOf("u")
nome.lastIndexOf("l")
nome.localeCompare(no)//retorno 0 para iguais e -1 para false uma sendo menor que a outra ou 1 tmb uma sendo menor que a outra
nome.replace("s","t")// troca o primeiro caracter pelo segundo. mas somente o primeiro achado
nome.search("sam")//ele procura por toda a string e retorna a primeira posicao que ele encontrar
nome.slice(2,3)//corta do inicio ao fim descrito em seu parametro
nome.split(" ")// retonra um array com todos os cortes de acordo com seu parametro 
