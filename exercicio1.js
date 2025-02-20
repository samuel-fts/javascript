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
    console.log("entrou")
    box.map((e)=>{
        let next=e.parentNode.nextSibling.nextSibling.firstChild
        let prev=next.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.firstChild
       
        console.log(next,e,prev)
        // let prev=e.previousElementSibling
        if(prev != null && next != null){
            console.log("entrou2")
            if((e.innerHTML == "X" && prev.innerHTML == "X" && next.innerHTML =="X")){
                console.log("voce ganhou")
            }
        }
        
        
    })
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