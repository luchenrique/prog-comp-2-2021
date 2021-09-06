let sistemaVendas = () => {

    let opcao
    let vetVendedores = []
    let vetVendas = []
    do {
        opcao = Number(prompt(`Informe: \n1. Cadastrar vendedor  \n2. Cadastrar venda  \n3. Procura venda  \n4. Soma venda por vendedor \n5. Mostra a maior venda do mês \n6. Mês que mais vendeu \n7. Sair`))
        
        switch(opcao){
            case 1: let objeto = {
                codigo: Number(prompt(`Informe o código`)),
                nome: prompt(`Informe seu nome`),
                rg: prompt(`Informe seu RG`)
            }
            //verifica se já tem outro vendedor com o mesmo código
            let achou = false
            //vetVendedores.length retorna o tamanho do vetor
            for (let i=0; i<vetVendedores.length; i++){
                if (vetVendedores[i].codigo == objeto.codigo){
                    achou = true // achei - não posso cadastrar
                }
            }
            if (!achou){
                // adiciona objeto no vetor
                vetVendedores.push(objeto)
                alert(`Vendedor cadastrado com sucesso`)
            }
            else {
                alert(`Vendedor já existe com esse código`)
            }
            //add objeto no vetor
            vetVendedores.push(objeto)
            
                    break
            case 2: let objeto1 = {
                        codigo: Number(prompt(`Informe código do vendedor`)),
                        mes: Number(prompt(`Informe mês da venda`)),
                        valor: Number(prompt(`Informe o valor da venda`))
                    }
                    let achou1 = false
                    for(let i=0; i<vetVendas.length; i++){
                        // não podemos cadastrar duas vendas para o mesmo vendedor no mesmo mês
                        if ((vetVendas[i].codigo == objeto1.codigo) && (vetVendas.mes[i] == objeto1.mes))
                        achou1 = true // encontrei - não podemos cadastrar
                    }
                    if (!achou1){
                        vetVendas.push(objeto1)
                    }
                    else{
                        alert(`Já existe venda desse vendedor esse mês`)
                    }
                    vetVendas.push(objeto1)
                    break
            case 3: let codigo = Number(prompt(`Informe o código do vendedor`))
                    let mes = Number(prompt(`Informe o mês da venda`))
                    // percorre vetor de vendas
                    for(let i=0;i<vetVendas,length; i++){
                        if ((vetVendas[i].codigo == codigo) && (vetVendas[i].mes == mes)){
                            console.log(`O valor da venda do funcionario ${codigo} no mes ${mes} foi ${vetVendas[i].valor}`)
                        }
                    }
                    if (!achou){
                        console.log(`Venda não encontrada para este funcionário neste mês`)
                    }
                    break
            case 4: let codigo = Number(prompt(`Informe o código de vendedor`))
                    // percorre o vetor de vendas  
                    let soma = 0 
                    for (let i=0; i<vetVendas.length; i++){
                        if (vetVendas[i].codigo == condigo){
                            soma = soma + vetVendas[i].valor
                        }
                    }
                    if (soma == 0){
                        console.log(`Venda não encontrada para ess funcionario`)
                    }
                    else {
                        console.log(`O total de vendas do vendedor ${codigo} foi de ${soma}`)
                    }
                    break
            case 5: let mes5 = Number(prompt(`Informe o mês de interesse`))
                    let maiorValor = 0
                    let vendedorMaisVendeu = 0
                    for(let i=0; i<vetVendas.length; i++){
                        if (vetVendas[i].mes == mes5){
                            if (vetVendas[i].valor > maiorValor){
                                maiorValor = vetVendas[i].valor // atualiza o maior valor
                                vendedorMaisVendeu = vendedorMaisVendeu[i].condigo
                            }
                        }
                    }
                    console.log(`O vendedor que mais vendeu foi ${vendedorMaisVendeu} com ${maiorValor}`)
                    break
            case 6: let vetMeses = [0,0,0,0,0,0,0,0,0,0]
                    //percorre o vetor de vendas
                    for(let i=0; i<vetVendas.length; i++){
                        let aux = vetVendas[i].mes 
                        vetMeses[aux-1] = vetMeses[aux-1] + vetVendas[i].valor
                    }
                    console.log(vetMeses)
                    break
            case 7: alert(`O programa será encerrado`)
                    break
            default: alert(`Opção inválida`)
        }
        }
        while (opcao != 7)
    
}