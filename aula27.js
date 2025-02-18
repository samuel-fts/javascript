function* perguntas(){ //funcao geradora. ela pausa e retorna valores QUANDO QUISER
    const nome=yield 'qual seu nome?'
    const esporte=yield 'qual seu esporte?'
    return "seu nome é " + nome + ", seu esporte é" + esporte
}

const itc=perguntas()// ele armazena o programa e ele o controla
console.log(itc.next().value)// primeiro yield o paramentro é ignorado pela funcao, pois ainda nao comecou a rodar o codigo
console.log(itc.next('samuel').value)// segundo yield
console.log(itc.next('volei').value)// terceiro yield

