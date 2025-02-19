const box1 = [...document.querySelectorAll(".box_1")]
const box2 = [...document.querySelectorAll(".box_2")]
const box3 = [...document.querySelectorAll(".box_3")]

box_all = [box1, box2, box3]

function clicked(evt){
    box_all.map((e)=>{
        if(e[0] == box1[0]){
            // let id = evt.parentElement.id
            let a = e
            let r = Math.floor(Math.random()*3)
            let b = box3[r]
            console.log("w")
            setTimeout(()=>{
                 b.innerHTML="O"
            }, 500)
            let remover = box_all[0].splice(0,1)
        }
        //  if(box1[1] == evt){
        //      console.log("s2")
        //  }
        //  if(box1[2] == evt){
        //      console.log("s3")
        //  }
        //      // box1.map((e)=>{
        //      // if(evt == e.parentElement.id){
        //      //     let bo = box3[0]
        //      //     console.log("op")
        //      // }
        //  box2.map((e)=>{
                 
        //  })
        //  box3.map((e)=>{
                 
        //  })
    
    })
    
}


box1.map((e)=>{
    e.addEventListener("click",(evt)=>{
        if(evt.target.innerHTML == ""){
            evt.target.innerHTML= "X"
            console.log(evt.target.parentElement.id)
            clicked(evt.target)
        }
            
})

box2.map((e)=>{
    e.addEventListener("click",(evt)=>{
        if(evt.target.innerHTML == ""){
            evt.target.innerHTML= "X"
        }
        clicked()
})
})
box3.map((e)=>{
    e.addEventListener("click",(evt)=>{
        if(evt.target.innerHTML == ""){
            evt.target.innerHTML= "X"
        }
        clicked()
    })
})
})