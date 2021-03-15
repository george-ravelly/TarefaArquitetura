function gerador(){
    let nomes = []
    fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
        .then(response => response.json())
        .then(data => {
            data.results.forEach(element => {
                nomes.push(element.name)
            });
        }).catch(err => {
            console.log(err)
        })
    
    return nomes
}