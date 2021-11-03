let ex5 = () =>{
    // declara meses
    let meses = ["Janeiro", "Fevereiro", "Marco", "Abril", "Maio", "Junho", "Julho", "Agosto", 
    "Setembro", "Outubro", "Novembro", "Dezembro"] 

    // declara matriz
    let matriz = []
    do{
        opcao = Number(prompt(`1. Cadastrar Vendas \n2. Total vendido em cada mes \n3. Total vendido em cada semana \n4. Total vendido no ano \n5. Sair do programa`))
        switch(opcao){
            case 1: cadastraVendas(matriz, meses)
                break
            case 2: totalVendidoMes(matriz, meses)
                break 
            case 3: totalVendidoSemana(matriz)
                break
            case 4: totalVendidoAno(matriz)
                break
            case 5: alert(`Saindo do programa`)
                break
            default: alert(`Opção inválida`)
        }
    }
    while(opcao !=5)
}
    let cadastraVendas = (matriz, meses) => {
        for(let i=0; i<12; i++){ // para cada mês
            matriz[i] = []
            alert(`Informe as vendas do mes ${meses[i]}`)
            for(let j=0;j<4;j++){ // para cada semana
                matriz [i][j] = Number(prompt(`Informe o valor na semana ${j+1}`))
            }
        }

    }

    let totalVendidoMes = (matriz, meses) => {
        let soma
        for(let i=0; i<12; i++){ // para cada mês
            soma = 0
            for(let j=0;j<4;j++){ // para cada semana
                soma = soma + matriz [i][j] 
            }
            // acabou de somar o mês
            alert(`Total vendido no mes ${meses[i]} foi ${soma}`)
        }
    }

    let totalVendidoSemana = (matriz) => {
        // para cada coluna
        let soma
        for(let j=0;j<4;j++){ 
            // para cada linha
            soma = 0
            for(let i=0;i<12;i++){
                soma = soma + matriz [i][j]
            }
            // acabaram os meses
            alert(`A soma de vendas da semana ${j+1} e ${soma}`) 
        }
    }

    let totalVendidoAno = (matriz) => {
        let soma = 0
        for(let i=0;i<12;i++){// para cada linha
            for(let j=0;j<4;j++){ // para cada coluna
                soma = soma + matriz[i][j]
            }
        }
        alert(`A venda do ano inteiro foi de ${soma}`) 
    }

//======================================================================================================================
//======================================================================================================================