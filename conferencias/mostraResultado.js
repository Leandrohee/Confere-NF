function mostraResultado(pedido,os,ne,contrato){
    //PEDIDO
    const tdPedido = document.querySelector("[data-pedido]");
    tdPedido.innerHTML = pedido;
    pedido.slice(0,2) == "OK" ? tdPedido.style.cssText = 'background-color: #00DFA2' : tdPedido.style.cssText = 'background-color: #FF616D'

    //O.S
    const tdOs = document.querySelector("[data-os]");
    tdOs.innerHTML = os;
    os.slice(0,2) == "OK" ? tdOs.style.cssText = 'background-color: #00DFA2' : tdOs.style.cssText = 'background-color: #FF616D'

    //NOTA DE EMPENHO
    const tdNe = document.querySelector("[data-ne]");
    tdNe.innerHTML = ne;
    ne.slice(0,2) == "OK" ? tdNe.style.cssText = 'background-color: #00DFA2' : tdNe.style.cssText = 'background-color: #FF616D'

    //CONTRATO
    const tdContrato = document.querySelector("[data-contrato]");
    tdContrato.innerHTML = contrato;
    contrato.slice(0,2) == "OK" ? tdContrato.style.cssText = 'background-color: #00DFA2' : tdContrato.style.cssText = 'background-color: #FF616D'


}