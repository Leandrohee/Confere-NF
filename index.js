const inputUpload = document.querySelector(".recebe-pdf");
const space = "                    "
const btn = document.getElementById("btn");
pdfTeste = '/pdfTeste.pdf'
var pdfLoad
var paginasPdf

//AQUI COMEÇA O PDF.JS                                                              *ESTÁ COMENTADO POIS ESTOU USANDO A FUNCAO ABAIXO COMO ASYNC AWAIT*
// function lerPdf(pdfLoad){ 
//     const paginas = []                                     
//     pdfLoad.promise.then((pdf)=>{
//         var nPaginas = pdf.numPages

//         for(let i=1; i < nPaginas+1; i++){
//             pdf.getPage(i).then((page)=>{
//                 page.getTextContent().then((textContent)=>{
//                     paginas[i-1]=textContent.items.map(element=>{
//                         return element.str
//                     })
//                     paginas[i-1] = paginas[i-1].join(' ')

//                     nPaginas == i ? paginasPdf =  paginas: ""
//                 })
//             })
//         }
//     })
// } 

//PDF.JS COM O ASYNC AWAIT
async function lerPdf(pdfLoad){                                                                         //Funcao que usa muitos atributos da biblioteca PDF.js
    const paginas = []                                                                                  //Criei um array para gravar o texto de cada pagina do pdf, cada casa do array representa os textos da pagina do pdf
    const pdf = await pdfLoad.promise                                                                   //Pega o pdf load e le a promisse dentro dele 
    var nPaginas = pdf.numPages                                                                         //nPaginas eh a quantidade de paginas que o pdf tem

    for(let i = 1; i < nPaginas+1; i++){
        const page = await pdf.getPage(i)                                                               //Seleciona uma pagina especifica do pdf
        const textContent = await page.getTextContent()                                                 //Essa funcao pega todo o texto dessa pagina do pdf

        paginas[i-1]= textContent.items.map(e => {return(e.str)})                                       //transforma os dados em texto puro
        paginas[i-1] = paginas[i-1].join(' ')                                                           //Separa cada texto com um espaco

        nPaginas == i ? paginasPdf = paginas : ""                                                       //Quando ler a ultima pagina do pdf atribuir o array paginas a paginasPdf
    }
}



//AQUI FAZ O UPLOAD NO PDF E CONVERTE ELE PARA UM FORMATO QUE O PDF.JS LEIA (arraybuffer)
inputUpload.addEventListener("change",()=>{                                                             
    const fr = new FileReader();                                                                        //le o arquivo que esta no input e coloca na constante fr

    fr.readAsArrayBuffer(inputUpload.files[0])                                                          //le como um array e atualiza a constante fr

    fr.addEventListener("load", ()=> {                                                                  //Quando acaba de atualizar coloca o resultado do fr na constante pdfLoad
        pdfLoad = pdfjsLib.getDocument(fr.result)
        lerPdf(pdfLoad)                                                                                 //Envia o pdfLoad para a funcao lerPdf que eh responsavel de manipular os dados contidos no pdf
    })

 //INFORMANDO O DOCUMENTO SELECIONADO   
    const legendaNf = document.querySelector("#label-legenda")
    legendaNf.innerHTML = inputUpload.files[0].name;
    legendaNf.style.cssText = 'display: block;'

    mostraResultado("-","-","-","-","-","-","-","-","-","-","-","-")
})



//AQUI
    btn.addEventListener("click",()=>{
        // conferePedido(paginas)
        // confereOs(paginas)
        // confereNe(paginas)
        // confereContrato(paginas)
        // conferePrefixo(paginas)
        // conferePlaca(paginas)
        // confereDesconto(paginas)
        // confereMarca(paginas)
        // confereKm(paginas)
        // confereAno(paginas)
        // confereCodigo(paginas)
        // confereValor(paginas)

        
        //RESULTADOS
        mostraResultado(
            conferePedido(paginasPdf),
            confereOs(paginasPdf),
            confereNe(paginasPdf),
            confereContrato(paginasPdf),
            conferePrefixo(paginasPdf),
            conferePlaca(paginasPdf),
            confereDesconto(paginasPdf),
            confereMarca(paginasPdf),
            confereKm(paginasPdf),
            confereAno(paginasPdf),
            confereCodigo(paginasPdf),
            confereValor(paginasPdf)
        )
    })











