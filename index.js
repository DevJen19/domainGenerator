window.onload = function () {

    let resultados = [];

    const pronoun = ['the', 'our']
    const adj = ['great', 'big']
    const noun = ['jogger', 'racoon']

    for (let pronounIndex = 0; pronounIndex < pronoun.length; pronounIndex++) {
        for (let adjIndex = 0; adjIndex < adj.length; adjIndex++) {
            for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
                resultados.push(pronoun[pronounIndex] + adj[adjIndex] + noun[nounIndex] + ".com")
            }
        }
        
    }

    function getRandomElement() {
        return resultados[Math.floor(Math.random() * resultados.length)];
    }

    document.getElementById("dominios").innerHTML = getRandomElement();

    console.log(resultados);
}

