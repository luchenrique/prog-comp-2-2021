function questao2() {

    //declaraçao de vetor
    let jogadores = []
    let pontuacao = []
    for(let i=0; i<12; i++){
        jogadores.push(prompt(`Informe o nome do jogador`))
        pontuacao.push(Number(prompt(`Informe a ponstuação do jogador ${jogadores[i]}`)))
    }

    // processamento
    // cálculo da média
    let soma = 0
    for(let i=0;i<12;i++){
        soma = soma + pontuacao[i]
    }
    alert(`A média de pontuação do time é de ${soma/12}`)

    // calcular o cestinha
    let maior = 0
    let cestinha = ""
    for(let i=0;i<12;i++){
        if (pontuacao[i] > maior){
            maior = pontuacao[i]
            nome = jogador[i]
        }
    }
    console.log(`O cestinha do time é ${nome} com ${maior} pontos`)


    //criar vetor de pontuação par

    let pares = []
    for(let i=0;i<12;i++){
        if (pontuacao[i] % 2 ==0){
            pares.push(jogadores[i])
        }
    }
    alert(pares)
}

let questao1 = () => {

    let whatsapp = 0
    let email = 0
    let papel = 0
    let tf = 0
    let ava = 0
    let opcao
    do{
        opcao = Number(prompt(`Informe uma opção`))
        switch(opcao) {
            case 1: ava++
                    break
            case 2: papel++ 
                    break
            case 3: whatsapp++
                    break
            case 4: email++
                    break
            case 5: tf++
                    break
            default: alert(`Opção Inválida`)
        }
    }
    while (opcao != 0)
    console.log(`Ava - ${ava} Papel - ${papel} Whatsapp - ${whatsapp} E-mail ${email} TF - ${tf}`)
    console.log(`${(tf/(ava+papel+whatsapp+email+tf)*100)}`)
    //ordenar
    let troca
    for(let i=0;i<4;i++){
        if (ava > papel){
            troca = ava; ava = papel; papel = troca
        }
        if (papel > whatsapp){
            troca = papel; papel = whatsapp; whatsapp = troca
        }
        if (whatsapp > email){
            troca = whatsapp; whatsapp = email; email = troca
        }
        if (email > tf){
            troca = email; email = tf; tf = troca
        }
    }
    console.log(`${tf} ${email} ${whatsapp} ${papel} ${ava}`)
}