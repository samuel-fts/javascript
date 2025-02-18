const soma=(...valores)=>{
    const somar=val=>{
        let res=0
        for(v of val){
            res+=v
        }
        return res
    }
    return somar(valores)
}//functions dentro de functios podem usar os mesmos paramentros