function conferePedido(paginas){
    var primeiraPagina = paginas[0]
    var nPaginas = paginas.length
    var paginasMenosPrimeira = ""
    var regexPedido = /PEDIDO:\s?\d{1,4}[\/\s]/gi
    var matchesPedNoPed
    var matchesPedNaNf
    var pedPadrao
    var resultadoPedido

    try{
        for(let i=1; i < nPaginas; i++){
                paginasMenosPrimeira += paginas[i]
            }


            //DESCOBRINDO O NUMERO DO PEDIDO NO DOC PEDIDO
            matchesPedNoPed = paginasMenosPrimeira.match(regexPedido)

            //FORMATANDO O NUMERO DE PEDIDO ENCONTRADO
            if(matchesPedNoPed){
                if(matchesPedNoPed.length == 1){
                    pedPadrao = matchesPedNoPed[0]
                    pedPadrao = pedPadrao.replace(/[a-z : \s]/gi,"")
                    pedPadrao = pedPadrao.replace(/2023/,"")
                    pedPadrao[0] == 0 ? pedPadrao = pedPadrao.slice(1) : ""
                }
                else if(matchesPedNoPed.length > 1){
                    resultadoPedido = "Mais de 1 pedido encontrado"
                }
            }
            else{
                resultadoPedido = "Nenhum n° de pedido encontrdo"
            }

        
            //VERIFICANDO SE O NUMERO DO PED ENCONTRADO ESTA NA NF
            matchesPedNaNf = primeiraPagina.match(pedPadrao)
        
            if(matchesPedNaNf){
                if(matchesPedNaNf.length == 1){
                    resultadoPedido = `OK                    (${pedPadrao})`
                }
                else if (matchesPedNaNf.length > 1){
                    resultadoPedido = "Mais de 1 n° pedido encontrdos na NF"
                }
            }
            else{
                resultadoPedido = `Pedido ${pedPadrao} não encontrdo na NF`
            }
    }
    catch{
        resultadoPedido = `Pedido com problema (catch)`
    }

    return resultadoPedido;
}