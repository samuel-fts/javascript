const pessoa={
    nome:"Bruno",
    canal:"youtube",
    curso:"javascript",
    aulas:{
        aula01:"intro",
        aula02:"cond",
        aula03:"var"
    }
}


//converte objeto em string JSON
const s_json_pessoa=JSON.stringify(pessoa)
//converte a string JSON em objeto
const o_json_pessoa=JSON.parse('{"nome":"Bruno","canal":"youtube","curso":"javascript","aulas":{"aula01":"intro","aula02":"cond","aula03":"var"}}')
console.log(o_json_pessoa)

