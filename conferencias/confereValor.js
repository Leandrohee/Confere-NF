function confereValor(paginas){
    var primeiraPagina = paginas[0]
    var nPaginas = paginas.length
    var paginasMenosPrimeira = ""
    var resultadoValor
    var regexValor = /Trocar[\w\s*\(\)-çãõáéíóú]{0,100}\d{1,3}[\.,]\d{2}\s*0,00/gi
    var regexValorBruto = /total\sdos\sprodutos\s*\d{1,3}[.,]\d{1,3},?\d{0,2}/gi 
    var regexValorComDesconto = /total\sda\snota\s*\d{1,3}[.,]\d{1,3},?\d{0,2}/gi
    var matchValorAud, matchValorNf = [], valoresNaoEncontrados = [], matchValorBruto, matchValorComDesconto
    var valorPadrao = [], nCodigos, valorBrutoPadrao, valorComDescontoPadrao, descontoPadrao, valorEsperado



    try{
        for(let i=1; i < nPaginas; i++){
                paginasMenosPrimeira += paginas[i]
            }

            matchValorAud = paginasMenosPrimeira.match(regexValor)
            matchValorBruto = primeiraPagina.match(regexValorBruto)
            matchValorComDesconto = primeiraPagina.match(regexValorComDesconto)
            nCodigos = matchValorAud.length

            if (matchValorAud && matchValorBruto && matchValorComDesconto){
            //FORMATANDO O VALOR BRUTO, O VALOR COM DESCONTO E O DESCONTO
                valorBrutoPadrao = matchValorBruto[0]
                valorBrutoPadrao = valorBrutoPadrao.replaceAll(/[a-z /s]/gi,"")
                valorBrutoPadrao = valorBrutoPadrao.replace(".","")
                valorBrutoPadrao = Number(valorBrutoPadrao.replace(",","."))

                valorComDescontoPadrao = matchValorComDesconto[0]
                valorComDescontoPadrao = valorComDescontoPadrao.replaceAll(/[a-z /s]/gi,"")
                valorComDescontoPadrao = valorComDescontoPadrao.replace(".","")
                valorComDescontoPadrao = Number(valorComDescontoPadrao.replace(",","."))

                Object.keys(fornecedores).forEach(forn=>{
                    Object.keys(fornecedores[forn].linhas).forEach(linha =>{
                        if (primeiraPagina.match(fornecedores[forn].nome) && primeiraPagina.match(fornecedores[forn].linhas[linha].regex)){
                            descontoPadrao = fornecedores[forn].linhas[linha].desconto
                            descontoPadrao = descontoPadrao.replace("%","")
                            descontoPadrao = Number(descontoPadrao.replace(",","."))/100
                        }   
                    })
                })
                

                for(let i= 0; i< nCodigos; i++){
                    matchValorAud[i] = matchValorAud[i].replaceAll(/0,00/g,"")
                    matchValorAud[i] = matchValorAud[i].replace(" ","-") 

                    for(let a=0; a>-20; a--){
                        valorPadrao[i] = matchValorAud[i].slice(a-1)
                        if(matchValorAud[i].slice(a-2,a-1) == " " && matchValorAud[i].slice(a-1,a) > 0){
                            valorPadrao[i] = valorPadrao[i].replaceAll(/\s/g,"")
                            break
                        }
                    }

                    if(primeiraPagina.match(valorPadrao[i])){
                        matchValorNf.push(primeiraPagina.match(valorPadrao[i])[0])
                    }
                    else{
                        valoresNaoEncontrados.push(valorPadrao[i])
                    }
                }

                if(matchValorNf.length == matchValorAud.length){
                    valorEsperado = valorBrutoPadrao * (1-descontoPadrao)

                    if(valorEsperado.toFixed(2) == valorComDescontoPadrao){
                        resultadoValor = `OK  (R$ ${valorEsperado.toFixed(2)}) `
                    }
                    else{
                        resultadoValor = `Valor esperado: R$ ${valorEsperado.toFixed(2)} valor da NF: R$ ${valorComDescontoPadrao}`
                    }
                }
                else{
                    resultadoValor = `Não encontrado esse valor na NF: ${valoresNaoEncontrados}`
                }
            }
    }
    catch{
       if(matchValorAud == null){
            resultadoValor = 'Nao encontrado a audatex'
        }
        if(matchValorBruto == null){
            resultadoValor == 'Nao encontrado no valor da NF Bruto'
        }
        if(matchValorComDesconto == null){
            resultadoValor == 'Nao encontrado no valor da NF Bruto'
        }
    }
    

    return resultadoValor
}