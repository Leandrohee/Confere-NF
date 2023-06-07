const inputUpload = document.querySelector(".recebe-pdf");
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

//AQUI FAZ O UPLOAD NO PDF E CONVERTE ELE PARA UM FORMATO QUE O PDF.JS LEIA
function loadPdf(){                                               
    const fr = new FileReader();

    fr.readAsArrayBuffer(inputUpload.files[0])

    fr.addEventListener("load", ()=> {
        pdfLoad = pdfjsLib.getDocument(fr.result)
        lerPdf(pdfLoad)
    })
}


//AQUI
function conteudoPdf(paginas){
    console.log(paginas)
}










