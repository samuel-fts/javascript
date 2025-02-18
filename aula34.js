const c1=document.querySelector("#c1")//variavel const feita com query para selecionar todos os id C1

const msg=()=>{// arrow function feita para apresentar alerta ao clicar
    alert("clicou")
}

c1.addEventListener("click",(evt)=>{//variavel criada acima com o erlemento da div que tem id c1, sendo acrescentado um evento de click com a arrow function programada ja dentro da linha
    alert("Clicou")//pode ser feita dessa fomra, com a funccao sendo reproduzida aqui dentro
    msg()// ou posso chamar uma funcao de fora para poder ser reproduzida
    const el=evt.target
    el.classList.add("destaque")
})

const curso=[...document.querySelectorAll(".curso")]//criei uma constamte onde seleciona todos os elementos com a class "curso", depois utilizei um spread para o transformar em uma array e poder ser manipulada

curso.map((el)=>{// eu mapiei a nossa array vindoura direto do DOM e criei uma ARROW Function colocando cada elemento da array percorrida, dentro do paramnetro do function 
    el.addEventListener("click",(e)=>{// usei o EL, onde esta com todos os elementos mapeados e adicionei um evento de click e criei outtra arrow function para trazer ao parametro dela, oque aconteceu com esse evento apos o click
        const des=e.target// foi criada mais uma constante para receber o evento target que foi cirado apos o click///// O TARGET SERVE PARA MOSTRAR DE ONDE VEIO O CLICK, SENDO ASSIM A VARIAVEL RECEBE SOMENTE O VALOR DE ONDE FOI CLICKADO, NAO ALTERANDO AS DEMAIS DENTRO DA MESMA FUNCAO
        des.classList.add("destaque")//a variavel com o target, recebe um adicionar da lista class, onde posso adicionar qualquer outra classe ja existente somente na que foi usada o target, ou seja, somente na que foi clickada e passada adiante
        console.log(des.id)//a variavel+".id" mostra o id da variavel apos ser clicada, no console log
        console.log(des.innerHTMl)//a variavel+",innerHTML", me mostra o conteudo HTMl daquela variavel, ou seja, nesse caso, seria o que esta escrito

    })
})

