let sistemaAcademico = () => {
    //declarar estrutura de dados
    let vet = []
    let mat = []
    for(let i=0;i<3;i++){
        // para cada aluno
        // Insira o nome do aluno no vetor
        let objeto = {
            nome:prompt(`Informe o nome do aluno ${i+1}`),
            media:0
        }
        //insere o objeto no vetor
        vet.push(objeto)
        mat[i] = [] // Aloca espaço na memória para a matriz
        alert(`Informe 5 notas do aluno ${vet[i].nome}`)
        for(let j=0;j<5;j++){
            // Adiciona a nota na matriz
            mat[i][j] = Number(prompt(`Nota ${j+1}`))
        }
    }

    //calcula média
    let turma = 0
    for(let i=0;i<3;i++){
        for(let j=0;j<5;j++){
            vet[i].media = vet[i].media + mat[i][j]
        }
        vet[i].media = vet[i].media / 5 // calcula a média
        turma = turma + vet[i].media
        if (vet[i].media >= 6){
            alert(`Aluno ${vet[i].nome} foi aprovado`)
        }
        else if (vet[i].media >= 3){
            alert(`Aluno ${vet[i].nome} está de exame`)
        }
        else {
            alert(`Aluno ${vet[i].nome} está reprovado`)
        }
    }
    turma = turma / 3
    alert(`A média da turma é ${turma}`)
}