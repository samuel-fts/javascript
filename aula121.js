const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click",()=>{

})

let num = 10;
window.localStorage.setItem("numero",num)//atribui um item dentro do local storage onde se pode acessar msm depois de fechar o browser

let num1 = localStorage.getItem("numero")

localStorage.clear()

localStorage.key(0)

localStorage.length

sessionStorage