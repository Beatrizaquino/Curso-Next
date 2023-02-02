//utilizanod regra de recursividade para gerar os numeors da mega sena

 export function mega(qtde = 6,numero = []) {

    //tranformando em numero
    qtde = +qtde

    if(qtde < 6 && qtde > 60 ) {
    throw "Quantidade inválida"
    }

    //declarando parada
    if(numero.length === qtde){
        return numero.sort((n1, n2) => n1 - n2)
    }

    const numeroAleatorio = parseInt(Math.random() * 60 + 1)
    if(!numero.includes(numeroAleatorio)) {
        return mega(qtde, [...numero, numeroAleatorio])
    } else {
        return mega(qtde, numero)
    }

}
