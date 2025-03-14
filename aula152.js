
const configdgv={
    enpoint:"produtos.json",

}

const dgv=(configdgv)=>{
    fetch(configdgv.endpoint)
    .then(res=>res.json())
    .then(res=>{console.log(res)})  
}

