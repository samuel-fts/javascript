const objetos = document.getElementById("objetos")

let computador = {
    cpu: "",
    ram: "",

    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        
    }
}
computador["monitor"]="22pol"//metodo 1 de acresentar a propriedade no objeto
computador.placaVideo="rtx"//metodo 2 de acresentar a propriedade no objeto

console.log(computador.cpu)//metodo 1 para impressao de propriedade
console.log(computador["cpu"])//metodo 2 para impressao de propriedade

const c1=Object.assign({},computador)//ele clona o objeto

delete(computar.hd)//deleta a propriedade do objeto

c1.info()

const c2 = Object.create(computador)
c2.info()
c2.ram="32"

const o1={obj:"1"}
const o2={obj:"2"}
const o3={obj:"3"}

const o4=Object.assign(o1,o2,o3)// mescla os objetos em uma nova copia



console.log(o4)


const computadores=[
    {
        cpu: "i9",
        ram: "64gb"
    },
    {
        cpu: "i7",
        ram: "64gb"
    },
    {
        cpu: "i5",
        ram: "64gb"
    }
]

computadores.forEach((c)=>{
    const div=document.creatElement("div")
    div.innetHTML=c.cpu+'<br/>'+c.ram+'<br/>'
    div.setAttribute("class","computador")
    objetos.appendChild(div)
})

computador.info()

objetos.innerHTML = computador.cpu + "-" + computador.ram// mostrar o conteudo do obejto

objetos.innerHTML = JSON.stringify(computadores) // mostra o conteudo do objeto traduzidop para JSON

