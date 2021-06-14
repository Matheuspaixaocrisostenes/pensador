let tentativa = 0
let computador = Math.random() * (10-1) + 1
let num =  Math.round(computador)
let result = document.getElementById('res')
function process(){
    setInterval(100)
}
function verify(){
    let jogada = document.getElementById('jogada').value
    let palpite = Number(jogada)
    result.innerHTML = ""
    if(palpite == num){
        tentativa += 1
        result.innerText = `Processando dados`
        setTimeout(() => {
            result.innerHTML = `PARABÉNS você acertou com ${tentativa} Tentativas`
        }, 1000);
    }else{
            result.innerHTML = "Você errou tente novamente"
    }
}
