const texto=documet.querySelector("#texto");

const endpoint="texto.txt"

fetch(endpoint)// ele que consome e diz que é uma api e nao uma mera string
.then((res)=>{console.log(res);return res.text()})
.then((res)=>{res=JSON.parse(res)/*retorna um objeto a partir da string JSON*/;console.log(res)})


