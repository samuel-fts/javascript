function soma(...valores){//paramentro rest utilizando stretch
    let tam=valores.length
    let res=0
    for(let v of valores){
        res+=v
    }
    return res

}

console.log(soma(20,5))

