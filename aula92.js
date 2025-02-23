import {cursos,getTodosCursos} from "./modulo92.js"
import {getTodosCursos as c,cursos} from "./modulo92.js"// export padrao so pode ter um 
import {carro} from "./modulo92.js"
import c from "./modulo92.js"// posso colocar oçutro nome, sem o as. pq é o default
// pode ser renomeado com o as

import * as m_cursos from "./modulo92.js"//  importa todos os exports na msm variavel 


console.log("rodando")
console.log(m_curso.default())// mostra o curso default ou pode colocar o nome do export
console.log(carro)
console.log(c()) // é um metodo

c.addCurso("http")
c.apargarCurso()


