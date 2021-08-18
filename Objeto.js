let carro1 = new Object()
carro1.marca = "Chevrolet"
carro1.modelo = "Onix"
carro1.ano = 2019
carro1.cor = "Preto"

console.log(carro1)

let carro2 = new Object()
carro2.marca = "Fiat"
carro2.modelo = "Palio"
carro2.ano = 2014
carro2.cor = "Branco"

console.log(carro2)



let camisa1 = new Object()
camisa1.cor = "Preta"
camisa1.tamanho = "M"
camisa1.time = "São Paulo"

console.log(camisa1)


let time1 = {
    nome: "Corinthians",
    mundiais: 2,
    apelido: "Timão",
    localizção: "SP" 
}

console.log(time1)

let time2 = {
    nome: "Santos",
    mundiais: 1,
    apelido: "Peixe",
    localizção: "SP" 
}

console.log(time2)


let camisa1 ={
    cor: "Branca",
    tamanho: "M",
    time: "São Paulo"
}

console.log(camisa1)


let nuvem1 = new Object ()

nuvem1 ["local"] = "Amazon"
nuvem1 ["disco"] = "256 de SSD"
nuvem1 ["ram"] = 6

console.log(nuvem1)







let vetor = []

for(let i=0; i<4; i++){
    //cria objeto
    let objeto ={
        nome: prompt(`Informe o nome do produto`),
        qtde: Number(prompt(`Informe qtde do produto`)),
        preco: Number(prompt(`Infomr o valor do objeto`))
    }
    //
    vetor.push(objeto)
}



let soma = 0
for(let i=0;i<4;i++){

    soma = soma + vetor[i].preco
}

console.log(`A média é de ${soma}`)