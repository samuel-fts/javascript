class Npc{
    static alerta=true
    constructor(energia){
        this.energia=energia
    }
    info=function(){
        console.log(`enregia: ${this.energia}`)
        console.log(`alerta: ${(Npc.alerta?"sim":"nao")}`)
    }
    static alertar=function(){
        Npc.alerta=true
    }
}
    
const npc1=new Npc(100)
const npc2=new Npc(100)
const npc3=new Npc(100)

Npc.alertar()

npc1.info()