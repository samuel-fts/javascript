const head=document.head
const body=document.body

const estilo="<link rel='stylesheet' type='text/css' href='topo.css'/>"
head.innerHTML+=estilo
const estilotopo=
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #eee;"

const topo=document.createElement("div")
topo.setAttribute("id","topo")
topo.setAttribute("class",estilotopo)
body.prepend(topo)

const estilo_img_logo="width: 200px;"

const logo=
    "<div id='logo' class='logo'>"+
        "<img src='logo.png' title='CFBCursos' style='"+estilo_img_logo+"'/>"+
    "</div>"

topo.innerHTML+=logo

const login=
    "<div id='login' class='login'>"+
        "<p id='matricula'>Matricula:<span></span></p>"+
        "<p id='nome'>Nome:<span></span></p>"+
    "</div>"
topo.innerHTML+=login