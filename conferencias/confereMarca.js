function confereMarca(paginas){
    var primeiraPagina = paginas[0]
    var resultadoMarca, marcaPadrao
    var matchFornecedorNaNf, matchLinhaNaNf, regexFornecedor, regexLinhas

    try{
        Object.keys(fornecedores).forEach(forn=>{                           //Object.Keys percorre todos os objetos
            Object.keys(fornecedores[forn].linhas).forEach(lin=>{
            regexLinhas = fornecedores[forn].linhas[lin].regex              //Percorre todas as regex de linhas do objeto forncedores 
            regexFornecedor = fornecedores[forn].nome                       //Percorre todas as regex do nome do fornecedor do objeto fornecedor
            matchLinhaNaNf = primeiraPagina.match(regexLinhas)              //Encontra qual linha em questao se encontra na NF
            matchFornecedorNaNf = primeiraPagina.match(regexFornecedor)     //Encontra qual fornecedor em questao se encontra na NF    

            if(matchFornecedorNaNf && matchLinhaNaNf){                      //Quando der match no fornecedor e na linha atribuir marca Padrao
                marcaPadrao = lin
            }
            })
        })

        resultadoMarca = `OK (${marcaPadrao})`
    }
    catch{
        resultadoMarca = `Marca com problema (catch)`
    }


    return resultadoMarca


}   