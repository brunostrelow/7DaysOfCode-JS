const resultado = Math.floor(Math.random() * (10 - 0 + 1) + 0)
let res = document.querySelector('.res')

function enviar () {
    
    for (let i = 0;i < 3; i++) {
        res.innerHTML = ""
        const chute = prompt('Digite um valor entre 0 e 10!')
        if (resultado == chute.valueOf()){
            resultFinal = true
            alert('Parabéns, você acertou!')
            break
        } else {
            resultFinal = false
            alert('Você errou, tente novamente!')
            continue
        }  
    }
    if (resultFinal == true) {
        res.innerHTML = `PARABÉNS! O NÚMERO ERA ${resultado}!! Clique em começar para tentar novamente!`
        
    } else {
        res.innerHTML = `O jogo acabou, o número era ${resultado}!! Clique em começar para tentar novamente!`
        
    }
    
}