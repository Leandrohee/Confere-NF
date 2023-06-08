const inputUpload = document.querySelector(".recebe-pdf");
const space = "                    "
const btn = document.getElementById("btn");
pdfTeste = '/pdfTeste.pdf'
var pdfLoad
var paginas = []

//AQUI COMEÇA O PDF.JS
function lerPdf(pdfLoad){                                               
    pdfLoad.promise.then((pdf)=>{
        var nPaginas = pdf.numPages

        for(let i=1; i < nPaginas+1; i++){
            pdf.getPage(i).then((page)=>{
                page.getTextContent().then((textContent)=>{
                    paginas[i-1]=textContent.items.map(element=>{
                        return element.str
                    })
                    paginas[i-1] = paginas[i-1].join(' ')

                    nPaginas == i ? conteudoPdf(paginas): ""
                })
            })
        }
    })
}        

//AQUI FAZ O UPLOAD NO PDF E CONVERTE ELE PARA UM FORMATO QUE O PDF.JS LEIA (arraybuffer)
inputUpload.addEventListener("change",()=>{
    const fr = new FileReader();

    fr.readAsArrayBuffer(inputUpload.files[0])

    fr.addEventListener("load", ()=> {
        pdfLoad = pdfjsLib.getDocument(fr.result)
        lerPdf(pdfLoad)
    })

 //INFORMANDO O DOCUMENTO SELECIONADO   
    const legendaNf = document.querySelector("#label-legenda")
    legendaNf.innerHTML = inputUpload.files[0].name;
    legendaNf.style.cssText = 'display: block;'
})



//AQUI
function conteudoPdf(paginas){
    btn.addEventListener("click",()=>{
        conferePedido(paginas)
        confereOs(paginas)
        confereNe(paginas)
        confereContrato(paginas)
        
        //RESULTADOS
        mostraResultado(
            conferePedido(paginas),
            confereOs(paginas),
            confereNe(paginas),
            confereContrato(paginas)
        )
    })
}










