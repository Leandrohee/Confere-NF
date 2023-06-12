function confereMarca(){
    var primeiraPagina = paginas[0]
    var resultadoMarca
    var matchFornecedorNaNf, matchLinhaNaNf, regexFornecedor, regexLinhas


    try{

    }
    catch{
        resultadoMarca = `Marca com problema (catch)`
    }

    Object.keys(fornecedores).forEach(forn=>{
        Object.keys(fornecedores[forn].linhas).forEach(lin=>{
        regexLinhas = fornecedores[forn].linhas[lin].regex
        regexFornecedor = fornecedores[forn].nome
        matchLinhaNaNf = primeiraPagina.match(regexLinhas)
        matchFornecedorNaNf = primeiraPagina.match(regexFornecedor)

        if(matchFornecedorNaNf && matchLinhaNaNf){
            marcaPadrao = lin
        }
        })
    })

    resultadoMarca = `OK (${marcaPadrao})`

    return resultadoMarca


}