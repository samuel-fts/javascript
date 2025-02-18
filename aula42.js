const idades=[15,21,30,17,18,44,12,50]

const maior=idades.filter((valor)=>{// pode receber esses paramentro "valor,indice,arr"
    if(valor >= 18){
        return valor
    }
})//o filter pode receber parametros de condicao e retornar o valor, o map retorna true e false e nao tem as mesmas condicoes

