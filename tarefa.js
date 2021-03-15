function salvar(text) {
    let blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "resultado.txt");
}


let letra = ""
        let texto = "";
        function capturar(){
            letra = document.querySelector("#ltr").value
        }
        function acao() {
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                let fileSelected = document.getElementById('txt');
                let fileExtension = /text.*/;
                let fileTobeRead = fileSelected.files[0];
                if (fileTobeRead.type.match(fileExtension)) {
                    let fileReader = new FileReader();
                    fileReader.readAsText(fileTobeRead);
                    fileReader.onload = function (e) {
                        texto = fileReader.result
                        selecao(letra,texto)
                    }
                }
                else {
                    alert("Por favor selecione arquivo texto");
                }
            }
            else {
                alert("Arquivo(s) não suportado(s)");
            }
        }

        function selecao(letra, texto){
            console.log(letra)
            let tempText = ""
            let resultado = []
            for(let i = 0; i<texto.length; i++){
                if(texto[i] !== " "){
                    if(texto[i-1] === "\n" && texto[i] === letra){
                        while(true){
                            if(texto[i] === "\n"){
                                tempText+="\n"
                                break
                            }
                            tempText += texto[i++];
                        }
                        resultado.push(tempText)
                        tempText = ""
                    }
                }
            }
            ordenacao(resultado)
        }
        function ordenacao(resultado){
            let tempText = ""
            resultado.sort()
            resultado.forEach(element => {
                tempText+=element
            });
            geracaoPdf(tempText)
        }

        function geracaoPdf(novoTexto){
            salvar(novoTexto)
        }