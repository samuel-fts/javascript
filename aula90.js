const objetos = document.getElementById("objetos")

let computador = {
    cpu: "i9",
    ram: "64gb",

    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        
    }
}
computador["monitor"]="22pol"//metodo 1 de acresentar a propriedade no objeto
computador.placaVideo="rtx"//metodo 2 de acresentar a propriedade no objeto

console.log(computador.cpu)//metodo 1 para impressao de propriedade
console.log(computador["cpu"])//metodo 2 para impressao de propriedade

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

