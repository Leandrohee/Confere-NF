function confereKm(paginas){
    var primeiraPagina = paginas[0]
    var nPaginas = paginas.length
    var paginasMenosPrimeira = ""
    var resultadoKm, kmPadrao
    var regexKm = /hodômetro\s?:\s\d{1,3}\.\d{3}/gi
    var matchKmNoDoc, matchKmNaNf = []
    var variaveisKm = []


    
    try{
        for(let i=1; i < nPaginas; i++){
            paginasMenosPrimeira += paginas[i]
        }


        matchKmNoDoc = paginasMenosPrimeira.match(regexKm)

        if(matchKmNoDoc){
            kmPadrao = matchKmNoDoc[0]
            kmPadrao = kmPadrao.replace(/hodômetro|[:\s]/gi,"")

            variaveisKm[0] = new RegExp(kmPadrao.replace(".","\\."))
            variaveisKm[1] = kmPadrao.replace(".",",")
            variaveisKm[2] = kmPadrao.replace(".","")
            variaveisKm[3] = kmPadrao.replace("."," ")

            for(let i=0; i < 4 ;i++){
                if(primeiraPagina.match(variaveisKm[i])){
                    //CASO ENCONTRAR 2 VEZES A MESMA VARIAVEL DAR O PUSH 2 VEZES
                    for (let a = 0; a < (primeiraPagina.match(variaveisKm[i]).length) ; a++){
                        matchKmNaNf.push(primeiraPagina.match(variaveisKm[i])[a])  
                    }
                } 
            }

            if(matchKmNaNf.length >= 1){
                resultadoKm = `OK (${kmPadrao} Km)`
            }
            else{
                resultadoKm = `O Km: ${kmPadrao} não foi encontrado na NF`
            }
        }
        else{
            resultadoKm = `Não foi encontrado o km na O.S`
        }
    }
    catch{
        resultadoKm = `Km com problema (catch)`
    }

    return resultadoKm;

}