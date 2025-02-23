const cursos=["javascript","HTML"]
const carro=["polo","fit"]

const getTodosCursos=()=>{
    return cursos
}

export {carro} // precisa ser exportado!!
export {getTodosCursos}


class Curso {
    static cursos=["javascript", "html", "css"]

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCursos=(i_cursos)=>{
        return this.cursos[i_cursos]
    }

    static addCursos=()=>{
        this.cursos.push(novoCurso)
    }

    static apagarCurso=()=>{
       this.cursos=[] 
    }
}
export default Curso 