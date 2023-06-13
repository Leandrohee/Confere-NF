function mostraResultado(pedido,os,ne,contrato,prefixo,placa,desconto,marca,km,ano,codigo,valor){
    //PEDIDO
    const tdPedido = document.querySelector("[data-pedido]");
    tdPedido.innerHTML = pedido;
    pedido.slice(0,2) == "OK" ? tdPedido.style.cssText = 'background-color: #00DFA2' : tdPedido.style.cssText = 'background-color: #FF616D'
    pedido == "-" ? tdPedido.style.cssText = 'background-color: #ECF9FF' : ""

    //O.S
    const tdOs = document.querySelector("[data-os]");
    tdOs.innerHTML = os;
    os.slice(0,2) == "OK" ? tdOs.style.cssText = 'background-color: #00DFA2' : tdOs.style.cssText = 'background-color: #FF616D'
    os == "-" ? tdOs.style.cssText = 'background-color: #ECF9FF' : ""


    //NOTA DE EMPENHO
    const tdNe = document.querySelector("[data-ne]");
    tdNe.innerHTML = ne;
    ne.slice(0,2) == "OK" ? tdNe.style.cssText = 'background-color: #00DFA2' : tdNe.style.cssText = 'background-color: #FF616D'
    ne == "-" ? tdNe.style.cssText = 'background-color: #ECF9FF' : ""

    //CONTRATO
    const tdContrato = document.querySelector("[data-contrato]");
    tdContrato.innerHTML = contrato;
    contrato.slice(0,2) == "OK" ? tdContrato.style.cssText = 'background-color: #00DFA2' : tdContrato.style.cssText = 'background-color: #FF616D'
    contrato == "-" ? tdContrato.style.cssText = 'background-color: #ECF9FF' : ""

    //PREFIXO
    const tdPrefixo = document.querySelector("[data-prefixo]");
    tdPrefixo.innerHTML = prefixo;
    prefixo.slice(0,2) == "OK" ? tdPrefixo.style.cssText = 'background-color: #00DFA2' : tdPrefixo.style.cssText = 'background-color: #FF616D'
    prefixo == "-" ? tdPrefixo.style.cssText = 'background-color: #ECF9FF' : ""

    //PLACA
    const tdPlaca = document.querySelector("[data-placa]");
    tdPlaca.innerHTML = placa;
    placa.slice(0,2) == "OK" ? tdPlaca.style.cssText = 'background-color: #00DFA2' : tdPlaca.style.cssText = 'background-color: #FF616D'
    placa == "-" ? tdPlaca.style.cssText = 'background-color: #ECF9FF' : ""
   
    //MARCA
    const tdMarca = document.querySelector("[data-marca]");
    tdMarca.innerHTML = marca;
    marca.slice(0,2) == "OK" ? tdMarca.style.cssText = 'background-color: #00DFA2' : tdMarca.style.cssText = 'background-color: #FF616D'
    marca == "-" ? tdMarca.style.cssText = 'background-color: #ECF9FF' : ""
 
    //DESCONTO
    const tdDesconto = document.querySelector("[data-desconto]");
    tdDesconto.innerHTML = desconto;
    desconto.slice(0,2) == "OK" ? tdDesconto.style.cssText = 'background-color: #00DFA2' : tdDesconto.style.cssText = 'background-color: #FF616D'
    desconto == "-" ? tdDesconto.style.cssText = 'background-color: #ECF9FF' : ""
   
     //KM
     const tdKm = document.querySelector("[data-km]");
     tdKm.innerHTML = km;
     km.slice(0,2) == "OK" ? tdKm.style.cssText = 'background-color: #00DFA2' : tdKm.style.cssText = 'background-color: #FF616D'
     km == "-" ? tdKm.style.cssText = 'background-color: #ECF9FF' : ""
    
     //ANO
     const tdAno = document.querySelector("[data-ano]");
     tdAno.innerHTML = ano;
     ano.slice(0,2) == "OK" ? tdAno.style.cssText = 'background-color: #00DFA2' : tdAno.style.cssText = 'background-color: #FF616D'
     ano == "-" ? tdAno.style.cssText = 'background-color: #ECF9FF' : ""
    
     //CODIGO
     const tdCodigos = document.querySelector("[data-codigo]");
     tdCodigos.innerHTML = codigo;
     codigo.slice(0,2) == "OK" ? tdCodigos.style.cssText = 'background-color: #00DFA2' : tdCodigos.style.cssText = 'background-color: #FF616D'
     codigo == "-" ? tdCodigos.style.cssText = 'background-color: #ECF9FF' : ""
    
     //VALOR
     const tdValor = document.querySelector("[data-valor]");
     tdValor.innerHTML = valor;
     valor.slice(0,2) == "OK" ? tdValor.style.cssText = 'background-color: #00DFA2' : tdValor.style.cssText = 'background-color: #FF616D'
     valor == "-" ? tdValor.style.cssText = 'background-color: #ECF9FF' : ""
    
}