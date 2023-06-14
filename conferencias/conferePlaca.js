function conferePlaca(paginas){
    var primeiraPagina = paginas[0]
    var nPaginas = paginas.length
    var paginasMenosPrimeira = ""
    var regexPlaca = /placa\s?:\s[a-z]{3}\s[\d]{4}/gi
    var matchPlacaNaOs, matchPlacaNaNf = []
    var placaPadrao, variaveisPlaca = [], regexVariaveisPlaca = []
    var resultadoPlaca

    for(let i=1; i < nPaginas; i++){
        paginasMenosPrimeira += paginas[i]
    }

    try{
        matchPlacaNaOs = paginasMenosPrimeira.match(regexPlaca);

        if(matchPlacaNaOs){
            matchPlacaNaOs[0] = matchPlacaNaOs[0].replace(/placa|:/gi,"")
            matchPlacaNaOs[0] = matchPlacaNaOs[0].replace(/\s/gi,"-")

            for(let i=0; i<10; i++){
                placaPadrao = matchPlacaNaOs[0].slice(i)
                if(matchPlacaNaOs[0].slice(i,i+1) != "-"){
                    break
                }
            }

            //transformando o padrao em 7 diferentes variantes
            variaveisPlaca[0] = placaPadrao                     // XXX-0000
            variaveisPlaca[1] = placaPadrao.replace("-","")   // XXX0000
            variaveisPlaca[2] = placaPadrao.replace("-"," ")    // XXX 0000 
            variaveisPlaca[3] = placaPadrao.replace("-"," - ")       // XXX - 0000
            variaveisPlaca[4] = placaPadrao.replace("-","- ")    // XXX- 0000
            variaveisPlaca[5] = placaPadrao.replace("-"," -")    // XXX -0000

            //COM TODAS VARIAVEIS DEFINIDAS TRANSFORMAR ELAS EM REGEX PARA EVITAR LETRAS MINUSCULAS
            for(let i=0; i < 6 ;i++){
                regexVariaveisPlaca[i]= new RegExp(variaveisPlaca[i],"gi");

                if(primeiraPagina.match(regexVariaveisPlaca[i])){
                    //CASO ENCONTRAR 2 VEZES A MESMA VARIAVEL DAR O PUSH 2 VEZES
                    for (let a = 0; a < (primeiraPagina.match(regexVariaveisPlaca[i]).length) ; a++){
                        matchPlacaNaNf.push(primeiraPagina.match(regexVariaveisPlaca[i])) 
                    }
                }  
            }

            //MOSTRANDO OS RESULTADOS POSSIVEIS
            if(matchPlacaNaNf.length >= 1){
                resultadoPlaca =`OK (${placaPadrao})`
            }
            else{
                resultadoPlaca =`Placa ${placaPadrao} não encontrado na NF`
            }
        }
        else{
            resultadoPlaca = `Placa não encontrada na O.S`
        }
    }
    catch{
        resultadoPlaca = `Placa com problema (catch)`
    }
    
    return resultadoPlaca
}

