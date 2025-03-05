const p_temp=document.getElementById("p_temp")
const p_nivel=document.getElementById("p_nivel")
const p_press=document.getElementById("p_press")

const endpoint="https://2b8d91bd-1bcd-43ff-9867-229083d85a59-00-18bpit5zp5o9o.riker.replit.dev/"

const obterDados=()=>{
    fetch(endpoint,method="")// fetch é usado para consumo de APIS, ela retorna uma promisse
    .then((res)=>{return res.json()})//then retorna uma response || arrows functions nesse caso precisam de um retorno para o proximo then
    .then((dados)=>{
        console.log(dados)
        p_temp.innerHTML="temperatura"+ dados.temperatura
        p_nivel.innerHTML="temperatura"+ dados.nivel
        p_press.innerHTML="temperatura"+ dados.pressao

    })
}

// let intervalo=setInterval(obterDados,2000)

let dados={
    nome:"samel",
    canal:"samuel2"
}

let cabecalho={
    method:"POST",
    body:JSON.stringify(dados)
}

const gravarDados=()=>{
    const endpoint=""
    fetch(endpoint,cabecalho)
    .then((res)=>{return res.json()})
    .then((ret)=>{console.log(ret)})
}

    
