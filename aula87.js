const url=document.getElementById("url")
const btn_url=document.getElementById("btn_url")

btn_url.addEventListener("click",(evt)=>{
    window.location= url.value// vai redirecionar para a pagina que foi escrita. nao redireciona com o form
    console.log(url.value)
    window.history.go(2, -1)// pode navegar a quiantidade determinada para frente ou para tras usando os numeros ou numeros negativos 
    console.log(window.history.length)// mostra o tamanho do historico
    window.history.back()// voltar historico
    window.history.forward()// avançar historico
    window.location.reload()//recarrega página
    window.location.assign("google.com.br")// nao remove do historico
    window.location.replace("google.com.br")//substitui a url e nao traz rastreio de historico
    window.location="aula70.html"// redireciona para outra pagina ou arquivo html
})
