let sistemaImobiliaria = () => {
    let opcao
    let vetImoveis = []
    do{
        opcao = Number(prompt(`Informe \n1. Cadastra \n2. Consulta A \n3. 
        Consulta B \n4. Consulta C \n5. Sair`))
        switch(opcao){
            case 1: cadastraImovel(vetImoveis)
                break
            case 2:
                break
            case 3:
                break
            case 4:
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
        tipo: prompt(`Informe o tipo do imóvel \nA para Apartamente. \nC para Casa`).toUpperCase(),
        valor: Number(prompt(`Informe o valor do imóvel`))
    }
    let achou = false
    for(let i=0; i<vetImoveis.length; i++){
        if (vetImoveis[i].codigo == objeto.codigo){
            achou = true
            alert(`Este imóvel já foi cadastrado`)
        }
    }
    if (!achou){
        vetImoveis.push(objeto)
        alert(`Imóvel cadastrado com sucesso`)
    }
}