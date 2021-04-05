function gerador(novoTexto){
    const doc = new jsPDF()
    console.log(novoTexto)

    doc.text(novoTexto,10,10)
    doc.save('resultado.pdf')
}
