function confereNe(paginas){
    var primeiraPagina = paginas[0]
    var resultadoNe
    var nePadrao = null
    
    try{
        Object.keys(fornecedores).forEach(e=>{
            if(primeiraPagina.match(fornecedores[e].ne) && primeiraPagina.match(fornecedores[e].nome)){
                nePadrao = fornecedores[e].ne.source
                nePadrao = nePadrao.replace("[0]{0,5}","0000")
            }
        })

        if(nePadrao != null){
            resultadoNe = `OK (${nePadrao})`
        }
        else{
            resultadoNe = `Não encontrada Ne na NF`
        }

    }
    catch{
        resultadoNe = `Ne com problema (catch)`
    }

    return resultadoNe

}

