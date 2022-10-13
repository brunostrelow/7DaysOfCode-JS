res = document.querySelector('.res')

function começar() {
    let frutas = []
    let laticinios = []
    let congelados = []
    let doces = []
    let comida = ''
    let tipoComida = ''
    let remover = ''
    
    let confirmaçao = 'sim'
    while (confirmaçao != 'não') {
        if (frutas.length === 0 && laticinios.length === 0 && congelados === 0 && doces.length === 0) {
            confirmaçao = prompt('Você deseja adicionar uma comida na sua lista de compras? Digite sim ou não!')
        } else {
            confirmaçao = prompt('Você deseja adicionar uma comida na sua lista de compras? Digite sim ou não! Caso queira retirar algo, digite remover!')
        }

        while(confirmaçao != "sim" && confirmaçao != "não" && confirmaçao != 'remover') {
            alert(`Operação não reconhecida!`)
            confirmaçao = prompt('Você deseja adicionar uma comida na sua lista de compras? Digite sim ou não! Caso queira retirar algo, digite remover!')
        }

        if (confirmaçao === "não"){  
            break;
        }
        
        if (confirmaçao === 'sim') {
            comida = prompt('Qual comida você deseja inserir?')
            tipoComida = prompt('Qual categoria essa comida se encaixa? Frutas, laticínios, congelados ou doces?')        
            if(tipoComida == "frutas"){
                frutas.push(comida)
            } else if (tipoComida == "laticinios") {
                laticinios.push(comida)
            } else if (tipoComida == "congelados") {
                congelados.push(comida)
            } else if (tipoComida == "doces") {
                doces.push(comida)
            } else {
                alert('Essa categoria não existe!')
            }
        } else if (confirmaçao === 'remover') {
            if (frutas.length === 0 && laticinios.length === 0 && congelados === 0 && doces.length === 0) {
                alert('A lista está vazia!')
            } else {
                remover = prompt(`Sua lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}`)
                if(frutas.indexOf(remover) != -1){
                    frutas.splice(frutas.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if(laticinios.indexOf(remover) != -1){
                    laticinios.splice(laticinios.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if (doces.indexOf(remover) != -1){
                    doces.splice(doces.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else if (congelados.indexOf(remover) != -1){
                    congelados.splice(congelados.indexOf(remover), 1);
                    alert(`O item ${remover} foi removido com sucesso!`)
                } else {
                    alert(`Não foi possível encontrar o item dentro da lista!`)
                }
            }
        }
    res.innerHTML = `Sua lista de compras:<br> Frutas: ${frutas} <br> Laticínios: ${laticinios} <br> Congelados: ${congelados} <br> Doces: ${doces}`       
    }

}
