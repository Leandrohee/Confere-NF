function confereContrato(paginas){
    var primeiraPagina = paginas[0]
    var resultadoContrato
    var contratoPadrao = null



    try{
        Object.keys(fornecedores).forEach(e=>{
            if(primeiraPagina.match(fornecedores[e].contrato) && primeiraPagina.match(fornecedores[e].nome)){
                contratoPadrao = fornecedores[e].contrato.source
                contratoPadrao = contratoPadrao.replace("\\","")
            }
        })

        if(contratoPadrao != null){
            resultadoContrato = `OK (${contratoPadrao})`
        }
        else{
            resultadoContrato = `Contrato errado na NF`
        }
    }
    catch{
        resultadoContrato = `Contrato com problema (catch) `
    }

    return resultadoContrato
}