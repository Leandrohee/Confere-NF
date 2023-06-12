function confereDesconto(){
    var primeiraPagina = paginas[0]
    var nPaginas = paginas.length
    var paginasMenosPrimeira = ""
    var regexLinhas, regexFornecedor
    var descontoPadrao
    var variaveisDesconto = []
    var matchLinhaNaNf, matchFornecedorNaNf, matchDescontoNaNf = [], matchDescontoNoDoc = []
    var resultadoDesconto

    for(let i=1; i < nPaginas; i++){
        paginasMenosPrimeira += paginas[i]
    }

    try{
        Object.keys(fornecedores).forEach(forn=>{
                Object.keys(fornecedores[forn].linhas).forEach(lin=>{
                regexLinhas = fornecedores[forn].linhas[lin].regex
                regexFornecedor = fornecedores[forn].nome
                matchLinhaNaNf = primeiraPagina.match(regexLinhas)
                matchFornecedorNaNf = primeiraPagina.match(regexFornecedor)

                if(matchFornecedorNaNf && matchLinhaNaNf){
                    descontoPadrao = fornecedores[forn].linhas[lin].desconto
                }
                })
            })

            

            variaveisDesconto[0] = descontoPadrao                                 //49,21% || 50,00%
            variaveisDesconto[1] = new RegExp(descontoPadrao.replace(",","\\."))     //49.21% || 50.00%
            variaveisDesconto[2] = descontoPadrao.replace(/,\d{2}/g,"")              //49% || 50%
            variaveisDesconto[3] = descontoPadrao.replace(/,\d{2}/g,",0")            //49,2% || 50,0%
            variaveisDesconto[4] = descontoPadrao.replace(/,\d{2}/g,".0")            //49.2% || 50.0%

            for(let i=0; i<5; i++){
                if(primeiraPagina.match(variaveisDesconto[i])){
                    for(let a=0; a<(primeiraPagina.match(variaveisDesconto[i]).length); a++){
                        matchDescontoNaNf.push(primeiraPagina.match(variaveisDesconto[i])[a])
                    }
                }
                if(paginasMenosPrimeira.match(variaveisDesconto[i])){
                    for(let a=0; a<(paginasMenosPrimeira.match(variaveisDesconto[i]).length); a++){
                        matchDescontoNoDoc.push(paginasMenosPrimeira.match(variaveisDesconto[i])[a])
                    }
                }
            }

            if(matchDescontoNaNf.length >= 1 ){
                if(matchDescontoNoDoc.length >= 1){
                    resultadoDesconto = `OK (${descontoPadrao})`
                }
                else{
                    resultadoDesconto = `Desconto (${descontoPadrao}) correto na NF mas errado no pedido `
                }
            }
            else{
                resultadoDesconto = `Desconto (${descontoPadrao}) não encontrado na NF`
            }
    }
    catch{
        resultadoDesconto=`Desconto com problema`
    }

    return resultadoDesconto
}