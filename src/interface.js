function interface() {
    let letra = document.getElementById("ltr").value
    let texto = ""
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        let fileSelected = document.getElementById('txt')
        let fileExtension = /text.*/;
        let fileTobeRead = fileSelected.files[0];
        if (fileTobeRead.type.match(fileExtension)) {
            let fileReader = new FileReader();
            fileReader.readAsText(fileTobeRead);
            fileReader.onload = (e) => {
                texto = fileReader.result;
                selecao({"letra": letra,"texto": texto})
                console.log(texto)
            }
        }else{
            alert("arquivo invalido!")
        }
            
    }else {
        alert("Por favor selecione arquivo texto");
    }
}