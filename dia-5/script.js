res = document.querySelector('.res')
const confirmaçao = 'sim'

function começar() {
    let frutas = []
    let laticinios = []
    let congelados = []
    let doces = []
    
    let confirmaçao = 'sim'
    while (confirmaçao != "não") {
        confirmaçao = prompt('Você deseja adicionar uma comida na sua lista de compras? Digite sim ou não!')
        while(confirmaçao != "sim" && confirmaçao != "não") {
            alert(`Operação não reconhecida!`)
            confirmaçao = prompt("Você deseja adicionar uma comida na lista de compras? Responda 'sim' ou 'não'.")
        }
        if (confirmaçao === "não"){  
            break;
        }
        const comida = prompt('Qual comida você deseja inserir?')
        const tipoComida = prompt('Qual categoria essa comida se encaixa? Frutas, laticínios, congelados ou doces?')        
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
    
    res.innerHTML = `Sua lista de compras:<br> Frutas: ${frutas} <br> Laticínios: ${laticinios} <br> Congelados: ${congelados} <br> Doces: ${doces}`       
    }

}
