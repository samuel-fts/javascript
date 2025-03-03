let a,b,c,d ;
//DESESTRUTURAÇÃO
let numeros=[1,2,3,4]
let[q,w,e,r] = numeros
[a,b=0,c=0,d=0] = [10]
//associa os valores de um array para variaveis distintas
[a,b,c,d ]=[10,20,30,40]
({a,b,c,d }={a:"verde",b:"azul",c:"vermelho",d:"preto"})

let[c1,c3,,c4] = ["verde","azul","vermelho","preto"]

let numero = [10,20,30,40,50,60,70,80,90]

let[z,x,...v] = numero