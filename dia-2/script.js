const newLocal = document.window.prompt
function enviar(){
    const res = document.querySelector('.res')
    const nome = document.querySelector('#nome').value
    const idade = document.querySelector('#idade').value
    const linguagem = document.querySelector('#linguagem').value
    //res.innerHTML = `Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}`
    window.alert (`Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}`)
    const gostaLinguagem = window.prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`)
    if (gostaLinguagem == 1) {
        window.alert('Muito bom! Continue estudando e você terá muito sucesso.')
    } else {
        window.alert('Ahh que pena... Já tentou aprender outras linguagens?')
    }
}
