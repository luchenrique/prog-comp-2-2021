let sistemaViagens = () => {
    let opcao
    let vetViagens = []
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar Viajem  \n2. Consultar preço médio  \n3. Tipo de viagem  \n4. Viagem país \n5. Sair`))
        switch(opcao){
            case 1: cadastraViagem(vetViagens)
                    break
            case 2: console.log(MediaVigem(vetViagens))
                    break
            case 3: let tipo = prompt(`Informe o tipo que deseja saber \n A = Aérea \n T = Terrestre`).toUpperCase()
                    ConsultaViagem(vetViagens, tipo)
                    break
            case 4: let pais = prompt(`Viagem mais barata: \n Informe o nome do país`)
                    ValorViagem(vetViagens, pais)
                    break
            case 5: alert(`O programa será encerrado`)
                    break

            default: alert(`Opção inválida`)
        }
        
    }while (opcao != 5)
}

// 1. Cadastrar uma viagem, não é possível cadastrar duas viagens com o mesmo código
let cadastraViagem = (vetViagens) => {
    let objeto = {
        codigo: Number(prompt(`Informe o Código`)),
        pais: prompt(`Informe o País`),
        cidade: prompt(`Informe a Cidade`),
        valor: Number(prompt(`Informe o valor da viagem:`)),
        tipo: prompt(`Informe o tipo da viagem: \n A = Aérea \n T = Terrestre`).toUpperCase()
    }
    // verifica se já tem outra viagem com o mesmo código
    let achou = false
        for (let i=0; i<vetViagens.length; i++){
            if (vetViagens[i].codigo == objeto.codigo){
                achou = true // achei o código, não será possivel cadastrar
            }
        }
            if (!achou){
                vetViagens.push(objeto)
                alert(`Viagem cadastrada com sucesso`)
            }
            else {
                alert(`ERRO \n Já existe uma viagem com esse código`)
            }
            //add objeto no vetor
            console.log(vetViagens)
}

// 2. Consultar e mostrar o preço médio das viagens disponíveis aos clientes
let MediaVigem = (vetViagens) => {
    let  somageral = 0, media = 0
    for(let i = 0; i< vetViagens.length; i++){
        somageral = somageral+vetViagens[i].valor
    }

    media = somageral/vetViagens.length
    // Preço médio das viagens
    return media
}

// 3. Consultar e mostrar todas as viagens de um determinado tipo informado pelo usuário 
let ConsultaViagem = (vetViagens, tipo) => {
    for(let i=0; i<vetViagens.length; i++){
        if (vetViagens[i].tipo == tipo){
            console.log(vetViagens[i])
        }
    }
}

// 4. Consultar e mostrar a viagem mais barata de um determinado país informado pelo usuário 
let ValorViagem = (vetViagens, pais) => {

    let precoViagem = 100000000000
    let viagemMaisBarata = []
    for(let i = 0; i < vetViagens.length; i++){
        if(vetViagens[i].pais == pais){
            if(vetViagens[i].valor < precoViagem){
                precoViagem = vetViagens[i].valor
                viagemMaisBarata = vetViagens[i]
            }
        }
    }

    return viagemMaisBarata

}