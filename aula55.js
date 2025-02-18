const caixa=document.querySelector("#caixa")

let musicas=new Set(["musica1", "musica boa", "musica2"])

musicas.add("musica muito legal")
musicas.add("musica muito legal")
musicas.clear()
//nao permite entrada de valores iguais

musicas.forEach((el)=>{
    caixa.innerHTML+=el
})