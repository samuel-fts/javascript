let valores=[1,2]
const op=[
    (val)=>{
        let res=0
        for(v of val){
            res=val+v
        }
        return res
    }
]

console.log(op[0](valores))