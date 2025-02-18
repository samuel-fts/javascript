const caixaCursos=document.querySelector("#caixaCursos")
const btn_c=[...document.querySelectorAll(".curso")]
const c1_2=document.querySelector("c1_2")
const cursos=["HTML","CSS","JavaScript","PHP","React","MySQL","ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")
const btnRemoverCurso=document.getElementById("btnRemoverCurso")
const btnAdicionarNovoCursoAntes=document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois=document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso=document.getElementById("nomeCurso")

let indice=0

const tirarSelecao=()=>{
    const cursoSelecionados=[...document.querySelectorAll(".selecionado")]
    cursoSelecionados.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso=(curso)=>{
    const novoElemento=document.createElement("div")
    novoElemento.setAttribute("id","c"+indice)
    novoElemento.setAttribute("class","curso c1")
    novoElemento.innerHTML=curso
    novoElemento.addEventListener("click",(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle("selecionado")
    })


    return novoElemento
}
cursos.map((el,chave)=>{
    const novoElemento=criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado=()=>{
    const cursoSelecionados=[...document.querySelectorAll(".selecionado")]
    return cursoSelecionados[0]//precisa dizer a posicao para que seja retornado o seu elemento, caso nao diga, ele trara uma array de 1 elemento
}

btnCursoSelecionado.addEventListener("click",(evt)=>{
    try{
    //passou por toda geraçao ate chegar no que queriamos, que era o conteudo do texto e nao o objeto texto
        alert(cursoSelecionado().innerHTML)
    }catch(ex){
        alert("nada selecionado")
    }
    
    
})

btnRemoverCurso.addEventListener("click",(evt)=>{

    if(cursoSelecionado()!=undefined){
     
        cursoSelecionado().remove()
   
     }else{
        alert("selecione algum")
     }
    
   
})
btnAdicionarNovoCursoAntes.addEventListener("click",(evt)=>{
  
    try{
        if(nomeCurso.value!=""){
            const rs = cursoSelecionado()
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,rs)
        }else{
            alert("vazio")
        }
    }catch(ex){
        alert("nada selecionado")
    }
    
})
btnAdicionarNovoCursoDepois.addEventListener("click",(evt)=>{
    
    try{
        if(nomeCurso.value!=""){
            const rs=cursoSelecionado().nextSibling
            const novoCurso=criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoCurso,rs)
        }else{
            alert("vazio")
        }
    }catch(ex){
        alert("nada selecionado")
    }
    
})