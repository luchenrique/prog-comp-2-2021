let gerenciaRedesSociais = () => {
    let vetorRedesSociais = []
    for(let i=0;i<5;i++){
        let objeto ={
            codigo: Number(prompt(`Informe código de refe social`)),
            nome: prompt(`Informe nome da rede social`),
            url: prompt(`Informe url da rede social`)
        }
        // inserir objeto no vetor
        vetorRedesSociais.push(objeto)
    }
    // cadastro dos usuarios
    let vetorUsuarios = []
    for(let i=0;i<5;i++){
        let objeto = {
            login: prompt(`Informe o login do usuário`),
            nome: prompt(`Informe o nome do usuário`),
            codigoRedeSocial: Number(prompt(`Informe o código da rede social`)),
            qtdePost: Number(prompt(`Informe a qtde de Posts`))
        }
    }
    // só faremos isso se a rede social existir

    let achou = false
    let j = 0 // indice do vetor de redes sociais
    while (!achou && j<5){
        if (vetorRedesSociais[j].codigo == objeto.codigoRedeSocial){
            vetorUsuarios.push(objeto)
            achou = true
        }
        j++
    }
    if (!achou){
        alert(`Rede social nâo encontrada`)
    }
}




