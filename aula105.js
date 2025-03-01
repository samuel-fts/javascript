let nome= new String("Samuel freitas")

nome.search("pinho")//diferencia entr maiusculo
nome.search(/pinho/i)//o "i" diz  que nao usara o case sensitive
nome.match(/pinho/ig)//pode ser usado mais de um modificador
nome.replace(/pinho/ig,/teste/)//mesma coisa que o outro
nome.match(/o/g)//mostra o primeiro "o"|| usando o regEx "g" mostra todos os que foram encontrados

nome.match(/[oh]/ig)// podemos criar padroes usando o [], econtrara tudo que esta dentro do ´[] separadamente
nome.match(/[a-m|a-h|0-9]/ig)//ele mostra tudo que acha de a até m e de 0 até 9
//usa "|"para separar os padroes

//metacaracteres
nome.match(/\d/ig)//retorna tudo que é digito numerico
nome.match(/\s/ig)//retorna tudo que é digito espaços
nome.match(/\bP/ig)//retorna tudo que é digito alpha numerico

//quantificadores
nome.match(/o+/ig)//o mais diz que todos os parametros encontrados se resulta em uma so sentença e nao de forma separada
nome.match(/no*/ig)//retorna o primeiro sozinho e tmb ele junto
