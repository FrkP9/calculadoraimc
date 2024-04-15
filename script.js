

function calcular(){

    let txtk = document.getElementById('txtk')
    let txta = document.getElementById('txta')
    let res = document.querySelector('p#res')
    // peso = parseFloat(txtk.value)
    // altura = parseFloat(txta.value)

    peso = Number(txtk.value)
    altura = Number(txta.value)

    let imc = peso / (altura * altura)

    if (peso <= 0 || altura <= 0 || altura >= 3) {
        window.alert('Informe números válidos')
    } else {

        res.innerHTML = `Seu IMC é de: ${imc.toFixed(2)}`

        if (imc < 18.5){
            res.innerHTML += '<br>Magreza!' 
        }else if (imc >= 18.6 && imc < 24.9) {
            res.innerHTML +='<br> Normal!'
        } else if (imc >= 25 && imc < 29.9) {
            res.innerHTML +='<br> Sobrepeso!'
        } else if (imc >= 30 && imc < 39.9) {
            res.innerHTML +='<br> Obesidade!'
        } else {
            res.innerHTML +='<br> Obesidade Grave!'
        }

    }

  
}   