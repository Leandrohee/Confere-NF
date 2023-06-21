function confereOs(paginas){
    var primeiraPagina = paginas[0]
    var nPaginas = paginas.length
    var paginasMenosPrimeira = ""
    var regexOs = /Nº\sOS:\s{1,3}\d{4}\/\d{4}/g
    var matchesOsNaOs
    var matchesOsNaNf = []
    var contOsNaNf = 0
    var osPadrao
    var possiveisOs = []
    var resultadoOs

    try{
        for(let i=1; i < nPaginas; i++){
                paginasMenosPrimeira += paginas[i]
            }

            //LOCALIZANDO O Nº OS NA ORDEM DE SERVIÇO E FORMATANDO 
            matchesOsNaOs = paginasMenosPrimeira.match(regexOs);

            if(matchesOsNaOs){
                osPadrao = matchesOsNaOs[0]
                    osPadrao = osPadrao.replaceAll(/[a-z \s : º]/gi,"")
                    osPadrao[0]== 0 ? osPadrao = osPadrao.slice(1) : ""
                    osPadrao[0]== 0 ? osPadrao = osPadrao.slice(1) : ""

                    //POSSÍVEIS TIPOS DE OS NA NF
                    possiveisOs[0] = osPadrao.replace("/","-")                   // 927-2023
                    possiveisOs[1] = new RegExp(osPadrao.replace("/","\\."))     // 927.2023
                    possiveisOs[2] = osPadrao.replace("/"," ")                   // 927 2023
                    possiveisOs[3] = osPadrao.replace(/\/\d{4}/," ")            // 927
                    possiveisOs[4] = osPadrao                                    // 927/2023

                    //TESTANDO TODOS AS POSSIVEIS OS E CONTANDO AS TENTATIVAS ENONTRADAS
                    for(i=0; i<5 ; i++){
                        if(primeiraPagina.match(possiveisOs[i])){
                            matchesOsNaNf.push(primeiraPagina.match(possiveisOs[i]))
                            contOsNaNf += 1
                        }
                    }

                    //RESULTADOOS COM TODAS AS POSSIBILIDADES
                    if(contOsNaNf == 1){
                        resultadoOs = `OK (${osPadrao})`
                    }
                    else if(contOsNaNf > 1){
                        resultadoOs = `Encontrado mais de 1 O.S na NF: ${matchesOsNaNf}`
                    }
                    else{
                        resultadoOs = ` Não econtrado a O.S ${osPadrao} na NF`
                    }
                    if(contOsNaNf == 1 && primeiraPagina.match(possiveisOs[3])){
                        resultadoOs = `OK, mas ${possiveisOs[3]} está faltando o  /2023 `
                    }
            }
            else{
                resultadoOs = `Nº O.S não encontrado!`
            }
    }
    catch{
        resultadoOs = `O.S com problema (catch)`
    }

    return resultadoOs;

    console.log(osPadrao)
    console.log(possiveisOs[3])
    console.log(contOsNaNf)
    console.log(resultadoOs)
}