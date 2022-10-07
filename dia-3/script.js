
function frontend () { 
    const primeiraOpcao = window.prompt('Você gostaria de aprender Vue ou React?')
    if (primeiraOpcao == 'Vue' || primeiraOpcao == 'vue' || primeiraOpcao == 'React' || primeiraOpcao == 'react') {  
        segundaOpcao()
    } else {
        window.alert('[ERRO] Você digitou algo errado!')
    }
}

function backend () {
    const primeiraOpcao = window.prompt('Você gostaria de aprender C# ou Java?')
    if (primeiraOpcao == 'C#' || primeiraOpcao == 'c#' || primeiraOpcao == 'Java' || primeiraOpcao == 'java') {
        segundaOpcao()
    } else {
        window.alert('[ERRO] Você digitou algo errado!')
    }
}

function segundaOpcao() {
    const segundaescolha = window.prompt('Caso seu interesse seja continuar se especializando na área escolhida, digite 1! Já se seu interesse seja se tornar um dev fullstack, digite 2!')
    if (segundaescolha == "" || segundaescolha != 1 && segundaescolha != 2) {
        window.alert('[ERRO] Digite uma opção válida!')
    } else {
        // listaEscolhas()
        let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
        while (msg === "ok"){
            let novaTecnologia = prompt("Qual?");
            alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
            msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
        }
    } 
}
