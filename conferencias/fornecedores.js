var fornecedores = {
    gilson: {
        nome: /rabelo\sco/i,
        ne: /2024NE[0]{0,5}27/gi,
        contrato: /29\/2022|29\/22/gi,
        linhas: {
            gmUtilitario: {
               regex: /s10\s/i,
               desconto: "47,51%"   
            },                        
            vw:{
                regex:/vw/i,
                desconto:"49,10%",
            },
            fordUtiliraio: {
                regex:/ford/i,
                desconto:"43,10%",
            },
            mbUtilirio: {
                regex:/sprinter/i,
                desconto:"47,51%",
            },
            mbPesado: {
                regex:/atego|axor|accelo/i,
                desconto:"39,91%",
            },
            citroen :{
                regex:/citroen/i,
                desconto:"43,10%",
            },
            jeep :{
                regex:/jeep/i,
                desconto:"49,10%",
            },
            toyota :{
                regex:/toyota/i,
                desconto:"36,10%",
            },
            scania :{
                regex:/scania/i,
                desconto:"36,10%",
            }
        }
    },
    parts: {
        nome: /parts\slub/i,
        ne: /2024NE[0]{0,5}30/gi,
        contrato: /30\/2021|30\/21/gi,
        linhas: {
            honda: {
                regex:/honda/i,
                desconto:"45,00%",
            },
            yamaha:{
                regex:/yamaha/i,
                desconto:"55,00%",
            },
            renault: {
                regex:/renault/i,
                desconto:"58,00%",
            },
            fordPesado: {
                regex:/cargo|ford/i,
                desconto:"59,00%",
            }
        }
    },
    alberto: {
        nome: /ALBERTO/i,
        ne: /2024NE[0]{0,5}34/gi,
        contrato: /27\/2021|27\/21/gi,
        linhas: {
            agrale:{
                regex:/agrale/i,
                desconto:"",
            },
            iveco: {
                regex:/iveco/i,
                desconto:"52,00%",
            }
        }
    },
    erenice: {
        nome: /MR\sPECAS/i,
        ne: /2023NE[0]{0,5}06/gi,
        contrato: /37\/2018|37\/18/gi,
        linhas: {
            bmw: {
                regex:/bmw/i,
                desconto:"07,00%",
            }
        }
    },
    robson: {
        nome: /robson/i,
        ne: /2024NE[0]{0,5}35/gi,
        contrato: /29\/2021|29\/21/gi,
        linhas: {
            gmLeve: {
                regex:/cruze/i,
                desconto:"65,00%",
            },
            mitsubishi: {
                regex:/mitsubishi/i,
                desconto:"61,00%",
            },
            fiat: {
                regex:/fiat/i,
                desconto:"69,20%",
            }
        }
    }
}

