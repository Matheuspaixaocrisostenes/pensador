let tentativa = 0
let computador = Math.random() * (10-1) + 1
let num =  Math.round(computador)
let result = document.getElementById('res')

function valid(num){
    if(num.length == 0){
        alert('ERRO Você não digitou um numero')
    }
}

function verify(){
    tentativa += 1
    let jogada = document.getElementById('jogada').value
    let palpite = Number(jogada)
    valid(jogada)
    result.innerHTML = ""
    console.log(num);
    if(palpite == num){
        result.innerText = `Processando dados`
        setTimeout(() => {
            result.innerHTML = `PARABÉNS você acertou com ${tentativa} Tentativas`
        }, 1000);
    }else{
        result.innerHTML = "Processando dados"
        setTimeout(() => {
            result.innerHTML = `Você errou tente novamente` 
        }, 1000);
    }
    setTimeout(() => {
        result.innerHTML = ""
    }, 3000);
}
