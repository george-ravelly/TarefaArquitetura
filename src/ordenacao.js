function ordenacao(resultado) {
    let tempText = ""
    resultado.sort()
    resultado.forEach(element => {
        tempText += element
    })
    console.log(tempText)
    gerador(tempText)
}