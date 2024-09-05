let numeros = document.getElementById('numeros')
let calculo = document.getElementById('calculo')
let simbolos = document.getElementById('simbolos')

let gran_lista = []

function numerar() {
    for (let i = 0; i < 10; i++) {
        let numero = document.createElement('input')
        numero.type = 'button'
        numero.value = i
        numero.onclick = () => {
            calculo.value += i
        }
        numeros.appendChild(numero)
    }
    let lista = ['+', '-', '*', '/']
    for (const esto of lista) {
        let operador = document.createElement('input')
        operador.type = 'button'
        operador.value = esto
        operador.onclick = () => {
            if (!lista.includes(String(calculo.value).charAt(calculo.value.length - 1)) && 
                (calculo.value.length != 0 || (calculo.value.length == 0 && esto == '-'))) {
                calculo.value += esto
            }
            console.log(esto);
            
        }
        simbolos.appendChild(operador)
    }
}

function resolver() {
    
}

numerar()