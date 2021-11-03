let sistemaNotas = () => {
    let opcao
    let vetNotas = []
    let nota1
    let nota2
    do{
        opcao = Number(prompt(`Informe: \n1. Notas \n2. Média \n3. Sair`))
        switch(opcao){
            case 1: 
                nota1 = Number(prompt(`Informe a nota do seu trabalho`))
                nota2 = Number(prompt(`Informe a nota da sua prova`))
                notaGeral(vetNotas)
                break
            case 2: media(vetNotas)
                break
            case 3: alert(`O programa será encerrado`)
                break
        }
    }
    
    while(opcao != 3)
}

let notaGeral = () => {

}