// const cursos=['html','css','javascript'] --- foi defindo os valores da array
// cursos.map((el,i)=>{//percorre pela array e define o valor de cada um para a variavel el'
//     console.log('curso ' +el + ' posicao do curso: '+ i)// 'i' se tonrna a variavel com o valor da posicao de cada elemento na array
// })

// let el=document.getElementByTagName("div")//nao se pode percorrer por ser vindouro de html
// el=[...el]//torna possivel ser percorrido ''SPREAD''
// el.map((e,i)=>{//mapeia toda a vairaivel 'EL' e depois o coloca dentro da variavel 'e' 
//     e.innerHTML="cfb"//innerHTMl é usado para troca o valor de string dentro da variavel 'e', logo, o valor de e que por sua vez é o valor de el, se torno o que foi comandado
//     console.log(e.innerHTML)//mostra na tela a variavel e com o ineer, mostra somente o seu conteudo de string
// })
// console.log(el)

// const elemento=document.getElementByTagName('div')
// const val=Array.prototype.map.call(el,)


const convertInt=(e)=>parseInt(e)
let num=['1','2','3'].map(convertInt)


console.log(num)
