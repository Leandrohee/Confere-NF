function conferePrefixo(paginas){
    var primeiraPagina = paginas[0]
    var nPaginas = paginas.length
    var paginasMenosPrimeira = ""
    var regexPrefixo = /prefixo\s?:\s([a-z]{2,4}\s-\s\d{1,3})/gi
    var matchPrefixoNaOs, matchPrefixoNaNf =[], matchPrefixosoDoc = []
    var prefixoPadrao, variaveisPrefixos = [], regexVariaveisPrefixo = []
    var resultadoPrefixo

    try{
   for(let i=1; i < nPaginas; i++){
        paginasMenosPrimeira += paginas[i]
    }

    matchPrefixoNaOs = paginasMenosPrimeira.match(regexPrefixo);

    //SE ENCONTRAR O PREFIXO NA OS FORMATAR O PREFIXO  E VERIFICAR 7 VARIAVEIS PARA ELE
    if(matchPrefixoNaOs){
        prefixoPadrao = matchPrefixoNaOs[0];
        prefixoPadrao = prefixoPadrao.replaceAll(/prefixo|[:\s]/gi,"")      
        
        variaveisPrefixos[0] = prefixoPadrao                                //AO-56
        variaveisPrefixos[1]= prefixoPadrao.replace("-","\\.")              //AO.56
        variaveisPrefixos[2]= prefixoPadrao.replace("-"," ")                //AO 56  UM ESPACO
        variaveisPrefixos[3]= prefixoPadrao.replace("-","")                 //AO56
        variaveisPrefixos[4]= prefixoPadrao.replace("-"," - ")              //AO - 56 
        variaveisPrefixos[5]= prefixoPadrao.replace("-","- ")               //AO- 56
        variaveisPrefixos[6]= prefixoPadrao.replace("-"," -")               //AO -56
        variaveisPrefixos[7]= prefixoPadrao.replace("-","  ")               //AO  56    DOIS ESPACOS
        variaveisPrefixos[8]= prefixoPadrao.replace("-","   ")              //AO   56   TRES ESPACOS

        //COM TODAS VARIAVEIS DEFINIDAS TRANSFORMAR ELAS EM REGEX PARA EVITAR LETRAS MINUSCULAS
        for(let i=0; i < variaveisPrefixos.length ;i++){
            regexVariaveisPrefixo[i]= new RegExp(variaveisPrefixos[i],"gi");

            if(paginasMenosPrimeira.match(regexVariaveisPrefixo[i])){                                       //PROCURAR PREFIXO NA NF (PRIMEIRA PAGINA)
                //CASO ENCONTRAR 2 VEZES A MESMA VARIAVEL DAR O PUSH NO MATCHPREFIXONODOC
                for (let a = 0; a < (paginasMenosPrimeira.match(regexVariaveisPrefixo[i]).length) ; a++){
                    matchPrefixosoDoc.push(paginasMenosPrimeira.match(regexVariaveisPrefixo[i]))  
                }
            }
            if(primeiraPagina.match(regexVariaveisPrefixo[i])){                                             //PROCURAR PREFIXO NAS DEMAIS PAGINAS
                //CASO ENCONTRAR 2 VEZES A MESMA VARIAVEL DAR O PUSH NO MATCHPREFIXONODOC
                for (let a = 0; a < (primeiraPagina.match(regexVariaveisPrefixo[i]).length) ; a++){
                    matchPrefixoNaNf.push(primeiraPagina.match(regexVariaveisPrefixo[i])) 
                }
            }  
        }

        //MOSTRANDO OS RESULTADOS POSSIVEIS
        if(matchPrefixoNaNf.length >= 1){                                                           //SE ACHAR O PREFIXO NA NOTA FISCAL PROSSEGUIR
            if(matchPrefixosoDoc.length >= 2){                                                      //SE ACHAR O PREFIXO 2 VEZES NO DOCUMENTO QUER DIZER QUE ESTA TUDO OK
                resultadoPrefixo =`OK (${prefixoPadrao})`
            }
            else{
                resultadoPrefixo =`Prefixo ${prefixoPadrao} correto na NF e errado no Pedido`       //SE ACHAR UMA VEZ QUER DIZER QUE O PEDIDO ESTA ERADO
            }
        }
        else{
            resultadoPrefixo =`Prefixo ${prefixoPadrao} não encontrado na NF`
        }
    }
    else{
        resultadoPrefixo = `Prefixo não encontrdo na O.S`
    }
    }
    catch{
        resultadoPrefixo = `Prefixo com problema (catch)`
    }

    return resultadoPrefixo

}