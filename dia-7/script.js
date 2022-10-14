let res = document.querySelector('.res')
let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')


function soma() {
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    if(n1 == "" || n2 == "") {
        alert('[ERRO] Digite os números a serem usados na operação!')
    } 
    const resultado = (n1) + (n2)
    res.innerHTML = `O resultado da soma entre ${n1} e ${n2} é ${resultado}`
}

function subtraçao() {
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    if(n1 == "" || n2 == "") {
        alert('[ERRO] Digite os números a serem usados na operação!')
    } 
    const resultado = (n1) - (n2)
    res.innerHTML = `O resultado da subtração entre ${n1} e ${n2} é ${resultado}`
}

function multiplicaçao() {
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    if(n1 == "" || n2 == "") {
        alert('[ERRO] Digite os números a serem usados na operação!')
    } 
    const resultado = (n1) * (n2)
    res.innerHTML = `O resultado da multiplicação entre ${n1} e ${n2} é ${resultado}`
}

function divisao() {
    n1 = Number(num1.value)
    n2 = Number(num2.value)
    if(n1 == "" || n2 == "") {
        alert('[ERRO] Digite os números a serem usados na operação!')
    } 
    const resultado = (n1) / (n2)
    res.innerHTML = `O resultado da divisão entre ${n1} e ${n2} é ${resultado}`
}

function sair() {
    res.innerHTML = `Até a próxima!!`
}
