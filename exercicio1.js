const box = [...document.querySelectorAll(".box")]



function clicked(id,evt){
    box.map((e)=>{
        if(e.parentElement.id == id){
            let r = Math.floor(Math.random()*9)
            let b = box[r]

            if(b != evt && b.innerHTML == ""){        
                setTimeout(()=>{
                    b.innerHTML="O"
                }, 700)    
            }else{
                for (let i of box){
                    let evt_i = evt
                    if(i.parentElement.id != evt_i.parentElement.id && i.innerHTML === ""){      
                        setTimeout(()=>{
                            i.innerHTML="O"
                        }, 700)
                        break;                  
                    }        
                }  
            }
        }
    }) 
}

function conferir(){
    for(let i=0; i<box.length;i++){
        
        if( box[i-1] === undefined ||  box[i+1] === undefined){
           
        }else if(box[i-1] != (box[0] || box[3] || box[6])){
            let in_menos=box[i-1]
            let in_mais=box[i-2]
            let in_prin=box[i]
            let in_xmais = box[i+4]
            let in_xmenos = box[i-4]
            let in_xmais2 = box[i+2]
            let in_xmenos2 = box[i-2]
            let in_Imais = box[i+3]
            let in_Imenos = box[i-3]
            if((in_menos.innerHTML == "X")&&(in_mais.innerHTML == "X")&&(in_prin.innerHTML == "X")){//variacao reta 
                setTimeout(()=>{
                    alert("voce ganhou")
                },500)

            }else if(( in_xmenos === undefined ||  in_xmais === undefined)||( in_xmenos2 === undefined ||  in_xmais2 === undefined)){
                    console.log("indefinido")
                }else if(((in_xmenos.innerHTML == "X")&&(in_xmais.innerHTML == "X")&&(in_prin.innerHTML == "X"))||((in_xmenos2.innerHTML == "X")&&(in_xmais2.innerHTML == "X")&&(in_prin.innerHTML == "X"))){
                        setTimeout(()=>{
                            alert("voce ganhou")
                        },500)
                
                        }else if(( in_Imenos === undefined ||  in_Imais === undefined)){
                            console.log("indefinido")
                        }else if(((in_Imenos.innerHTML == "X")&&(in_Imais.innerHTML == "X")&&(in_prin.innerHTML == "X"))){
                            setTimeout(()=>{
                                alert("voce ganhou")
                            },500)
                        }

            
        }
            
        
        
    }
    for(let i=0; i<box.length;i++){
        
        if( box[i-1] === undefined ||  box[i+1] === undefined){
           
        }else if(box[i-1] != (box[0] || box[3] || box[6])){
            let in_menos=box[i-1]
            let in_mais=box[i-2]
            let in_prin=box[i]
            let in_xmais = box[i+4]
            let in_xmenos = box[i-4]
            let in_xmais2 = box[i+2]
            let in_xmenos2 = box[i-2]
            let in_Imais = box[i+3]
            let in_Imenos = box[i-3]
            if((in_menos.innerHTML == "O")&&(in_mais.innerHTML == "O")&&(in_prin.innerHTML == "O")){//variacao reta 
                setTimeout(()=>{
                    alert("voce perdeu")
                },500)

            }else if(( in_xmenos === undefined ||  in_xmais === undefined)||( in_xmenos2 === undefined ||  in_xmais2 === undefined)){
                    console.log("indefinido")
                }else if(((in_xmenos.innerHTML == "O")&&(in_xmais.innerHTML == "O")&&(in_prin.innerHTML == "O"))||((in_xmenos2.innerHTML == "O")&&(in_xmais2.innerHTML == "O")&&(in_prin.innerHTML == "O"))){
                        setTimeout(()=>{
                            alert("voce perdeu")
                        },500)
                
                        }else if(( in_Imenos === undefined ||  in_Imais === undefined)){
                            console.log("indefinido")
                        }else if(((in_Imenos.innerHTML == "O")&&(in_Imais.innerHTML == "O")&&(in_prin.innerHTML == "O"))){
                            setTimeout(()=>{
                                alert("voce perdeu")
                            },500)
                        }

            
        }
            
        
        
    }
}

box.map((e)=>{
    e.addEventListener("click",(evt)=>{
        if(evt.target.innerHTML == ""){
            evt.target.innerHTML= "X"
            console.log(evt.target.parentElement.id)
            let id = evt.target.parentElement.id
            clicked(id ,evt.target)
            conferir()
        }        
    })
})