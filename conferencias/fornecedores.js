var fornecedores = {
    gilson: {
        nome: /rabelo\sco/i,
        ne: /2023NE[0]{0,5}12/gi,
        contrato: /29\/2022/gi,
        linhas: {
            gmUtilitario: /s10\s/i,                         
            vw: /vw/i,
            fordUtiliraio: /ford/i,
            mbUtilirio: /sprinter/i,
            mbPesado: /atego|axor|accelo/i,
            citroen :/citroen/i,
            jeep :/jeep/i,
            toyota :/toyota/i,
            scania :/scania/i,
        }
    },
    parts: {
        nome: /parts\slub/i,
        ne: /2023NE[0]{0,5}04/gi,
        contrato: /30\/2021/gi,
        linhas: {
            honda: /honda/i,
            yamaha:/yamaha/i,
            renault: /renault/i,
            fordPesado: /cargo/i,
        }
    },
    alberto: {
        nome: /ALBERTO/i,
        ne: /2023NE[0]{0,5}67/gi,
        contrato: /27\/2021/gi,
        linhas: {
            agrale:/agrale/i,
            iveco: /iveco/i
        }
    },
    erenice: {
        nome: /MR\sPECAS/i,
        ne: /2023NE[0]{0,5}06/gi,
        contrato: /37\/2018/gi,
        linhas: {
            bmw: /bmw/i
        }
    },
    robson: {
        nome: /robson/i,
        ne: /2023NE[0]{0,5}03/gi,
        contrato: /29\/2021/gi,
        linhas: {
            gmLeve: /cruze/i,
            mitsubishi: /mitsubishi/i,
            fiat: /fiat/i
        }
    }
}

