function confereAno(){
    var primeiraPagina = paginas[0]
    var nPaginas = paginas.length
    var paginasMenosPrimeira = ""
    var resultadoAno
    var regexAno = /Ano\/Fabricação\s:\s\d{4}/gi
    var matchAnoNaOS, matchAnoNaNf
    var anoPadrao



    try{
        for(let i=1; i < nPaginas; i++){
            paginasMenosPrimeira += paginas[i]
        }

        matchAnoNaOS = paginasMenosPrimeira.match(regexAno)

        if(matchAnoNaOS){
            anoPadrao = matchAnoNaOS[0]
            anoPadrao = anoPadrao.replaceAll(/[a-z : ç ã \z \/ \s]/gi,"")

            matchAnoNaNf = primeiraPagina.match(anoPadrao)

            if(matchAnoNaNf){
                if(matchAnoNaNf.length == 1){
                    resultadoAno = `OK (${anoPadrao})`
                }
                else{
                    resultadoAno = `Foi encontrado mais de 1 ${anoPadrao} na NF`
                }
            }
            else{
                resultadoAno = `Não foi encontrada o ano ${anoPadrao} na NF`
            }        
        }   
        else{
            resultadoAno = `Não foi encontrado o ano na O.S`
        }
    }
    catch{
        resultadoAno = `Ano com problema (catch)`
    }
    
    return resultadoAno

}