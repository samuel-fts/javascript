const f_tipoMilitar=document.querySelector("#f_tipoMilitar")
const f_tipoNormal=document.querySelector("#f_tipoNormal")
const f_blindagem=document.querySelector("#f_blindagem")
const f_municao=document.querySelector("#f_municao")
const carros=documnet.queryLelector("#carros")
const btn_addCarro=document.querySelector("btn_addCarro")

let a_carros=[]

f_tipoMilitar.addEventListener("click",(e)=>{
    console.log("teste")
    f_blindagem.removeAttribute("disabled")
    f_municao.removeAttribute("disabled")
})

btn_addCarro.addEvenyListener("click",()=>{
    
    gerenciarExibCarros()
})

f_tipoNormal.addEventListener("click",(e)=>{
    f_blindagem.value=0
    f_municao.value=0
    f_blindagem.setAttribute("disabled")
    f_municao.setAttribute("disabled")
    console.log("teste")
})

const gerenciarExibCarros=()=>{
    carros.innerHTML=""
    a_carros.map((c)=>{
        const div=document.createElement("div")
        div.setAttribute("class","carro")
        div.innerHTML=c.nome
        carros.appendChild(div)
    })
    
}

class Carro{//classe pai
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){
        this.ligado=true
    }
    desligar=function(){
        this.ligado=false
    }
    setCor=function(){
        this.cor=cor
    }
}

class Militar extends Carro{//classe filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)//invocar o super manda o parametro para o pai
        this.blindagem=blindagem
        this.municao=municao
        this.setCor("verde")
    }
    atirar=function(){
        if(this.municao>0){
            this.municao--
        }
    }
}

const c1=new Carro("normal",4)
c1.ligar()
c1.setCor("preto")

const c2=new Militar("Lutador",1,100,50)
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()
