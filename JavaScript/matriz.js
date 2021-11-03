let sistemaNotas = () => {
    //declaração de uma matriz
    // 4x4
    let matriz = [] 
    matriz[0] = [] // vetor 1
    matriz[1] = [] // vetor 2
    matriz[2] = [] // vetor 3
    matriz[3] = [] // vetor 4

    // entrada de dados
    for(let i=0;i<4;i++){
        alert(` Informe as 4 notas do aluno ${i+1}`)
        for(let j=0;j<4;j++){
            matriz[i][j] = Number(prompt(` Informe a nota ${j+1}`))
        }
    }
    // calcular média de cada aluno
    for(let i=0;i<4;i++){
        let soma = 0
        for(let j=0;j<4;j++){
            soma = soma + matriz[i][j]
        }
        alert(`A média do aluno ${i + 1} é ${soma/4}`)
    }
}

//======================================================================================================================
//======================================================================================================================