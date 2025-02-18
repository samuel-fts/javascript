const cursosTodos=[...document.getElementByClassname("curso")]
const c1=[...document.getElementByClassname("c1")]
const c2=[...document.getElementById("c1")]
const cursoEspecial=document.getElementByClassName("curso")[0]//posso escolher a classe pela posicao dela
const divTodos=[...document.getElementByTagName("div")]

const query_divAll=[...document.querySelectorALL("div")]
const query_cursoAlll=[...document.querySelectorALL(".curso")]//querySelector pega tudo, sem precisar de uma pra cada
const query_Todos=document.querySelectorAll("#c1")// nao precisa por spread em squery id. ID sao unnicas e nao devem ser  usadas em mais de uma maracacao

const query_divAll0=[...document.querySelectorALL("div,p,.cursos")]// posso especificar varaias
const query_divAll1=[...document.querySelectorALL("div[class]")]//especifica somente divs com atributo class
const query_divAll2=[...document.querySelectorALL("div > p")]//especifica que quer somente elementos "p" que tenha como parent ">" divs

console.log(cursosTodos)
console.log(c1)
console.log(c2)

cursoTodos.map((el)=>{
    el.classList.add("destaque")//classList abre opcoes para mudancas em classes. add acrescnta classe
})
c1.map((el)=>{
    el.classList.add("destaque")//classList abre opcoes para mudancas em classes. add acrescnta classe
})