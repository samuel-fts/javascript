const p_array=document.querySelector("#array")
const txt_pesquisar=document.querySelector("#txt_pesquisar")
const btnPesquisar=document.querySelector("#btnPesquisar")
const resultado=document.querySelector("#resultado")

const elementos_array=[10,5,8,2,9,15,20]
p_array.innerHTML ="[" +elementos_array+"]"

btnPesquisar.addEventListener("click",(evt)=>{
    const re=elementos_array.find((e,i)=>{
        resultado.innerHTML="valor na0 encontrado"
        if(e==txt_pesquisar.value){
            resultado.innerHTML="valor pesquisar "+ e + " na posicao " + i
            return e
        }
    })
})