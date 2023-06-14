function confereCodigo(paginas){
    var primeiraPagina = paginas[0]
    var nPaginas = paginas.length
    var paginasMenosPrimeira = ""
    var resultadoCodigo
    var regexCodigo = /TROCAR\s\s[-\s\w\d]{0,40}/g
    var matchCodigosNaAud, nCodigos, codigosFormatados= [], matchCodigosNaNf= [], codigosNaoEncontrado = []

    try{
        for(let i=1; i < nPaginas; i++){
            paginasMenosPrimeira += paginas[i]
        }

        matchCodigosNaAud = paginasMenosPrimeira.match(regexCodigo)

        if(matchCodigosNaAud){
            nCodigos = matchCodigosNaAud.length

            for(let i= 0; i< nCodigos; i++){
                codigosFormatados[i] = matchCodigosNaAud[i]
                codigosFormatados[i] = new RegExp(codigosFormatados[i].replaceAll(/trocar|[\s-]/gi,""),"gi")

                if(primeiraPagina.match(codigosFormatados[i])){
                    matchCodigosNaNf.push(primeiraPagina.match(codigosFormatados[i])[0])
                }
                else{
                    codigosNaoEncontrado.push(codigosFormatados[i])
                } 
            }

            if(matchCodigosNaNf.length == matchCodigosNaAud.length){
                resultadoCodigo = `OK (${matchCodigosNaNf.length} Código(s))`
            }
            else{
                resultadoCodigo = `Código(s) não encontrados: ${codigosNaoEncontrado}`
            }
        }
        else{
            resultadoCodigo = `Não encontrado audatex`
        }
    }
    catch{
        resultadoCodigo = `Codigo com problema (catch)`
    }

    
    return resultadoCodigo
}