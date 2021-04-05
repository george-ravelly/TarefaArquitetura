function selecao(results) {
    let { letra, texto } = results
    let tempText = ""
    let resultado = []
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            if (texto[i - 1] === "\n" && texto[i] === letra) {
                while (true) {
                    if (texto[i] === "\n") {
                        tempText += "\n"
                        break
                    }
                    tempText += texto[i++]
                }
                resultado.push(tempText)
                tempText = ""
            }
        }
    }
    console.log(results, resultado)
    ordenacao(resultado)
}
