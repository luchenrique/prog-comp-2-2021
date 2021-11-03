let sistemaImobiliaria = () => {
    let opcao
    let vetImoveis = []
    do{
        opcao = Number(prompt(`Informe: \n1. Cadastra imovél \n2. Consulta A \n3. Consulta B \n4. Consulta C \n5. Sair`))
        switch(opcao){
            case 1: cadastraImovel(vetImoveis)
                break
            case 2: let tipo = prompt(`Qual o tipo do imóvel A ou C`).toUpperCase() 
            consultaImovel(vetImoveis, tipo)
                break
            case 3: consultaValorTotal(vetImoveis)
                break
            case 4: consultaImoveisGrandes(vetImoveis)
                break
            case 5:
                alert(`O Programa será encerrado`)
                break
            default: alert(`Opção inválida`)
        }
    }
    while (opcao != 5)
}

let cadastraImovel = (vetImoveis) => {
    let objeto = {
        codigo: Number(prompt(`Informe o código de imóvel: `)),
        tamanho: Number(prompt(`Informe o tamanho do imóvel`)),
        tipo: prompt(`Informe o tipo do imóvel: \nA para Apartamento. \nC para Casa`).toUpperCase(),
        valor: Number(prompt(`Informe o valor do imóvel`))
    }
    let achou = false
    for(let i=0; i<vetImoveis.length; i++){
        if (vetImoveis[i].codigo == objeto.codigo){
            achou = true
            alert(`ERRO \nEste imóvel já foi cadastrado`)
        }
    }
    if (!achou){
        vetImoveis.push(objeto)
        alert(`Imóvel cadastrado com sucesso`)
    }
}

let consultaImovel = (vetImoveis, tipo) => {
    for(let i=0; i<vetImoveis.length; i++){
        if (vetImoveis[i].tipo == tipo){
            console.log(vetImoveis[i])
        }
    }
}

let consultaValorTotal = (vetImoveis) => {
    let soma = 0
    for(let i=0; i<vetImoveis.length; i++){
        soma = soma + vetImoveis[i].valor
    }
    alert(`O valor total dos Imóveis é ${soma}`)
}

let consultaImoveisGrandes = (vetImoveis) => {
    for(let i=0; i<vetImoveis.length; i++){
        if (vetImoveis[i].tamanho > 100){
            console.log(vetImoveis[i])
        }
    }
}