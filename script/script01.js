const getImgApi = 'https://image.tmdb.org/t/p/w500/';

function getJSONServer() {
    // var filename = "bd.txt";
    var filename = "https://api.themoviedb.org/3/movie/popular?api_key=5d12fc4d35606145bdcb908526744d7e&language=pt-BR&page=1";
    fetch(filename)
        // .then(response => response.text())
        // .then(dados => document.getElementById("textServer").innerHTML = dados)
        .then(response => response.json())
        .then(dados => {
            generatePage(dados);
            console.log('DADOS GETJSONSERVER');
            console.log(dados);
        })
}

function generatePage(dados_filme) {
    for (var i = 0; i < 10; i++) {

        console.log("DADOS GENERATE PAGE");
        console.log(dados_filme.results[i].original_title);


        // Criando os elementos:

        const divContainer = document.createElement("div");
        const divDescription = document.createElement("div");
        const img = new Image();
        img.src = getImgApi + dados_filme.results[i].poster_path;
        const titulo = document.createElement("h1");
        const paragrafo2 = document.createElement("p");
        const linguaOri = document.createElement("h3");
        const dataLan = document.createElement("h3");
        const avaliacao = document.createElement("h3");
        const detalhes = document.createElement("details");
        const sumario = document.createElement("summary");

        // Inserindo os textos:
        var title = document.createTextNode(dados_filme.results[i].title);
        var overview = document.createTextNode(dados_filme.results[i].overview);
        var original_language = document.createTextNode(`Língua original: ${dados_filme.results[i].original_language}`);
        var release_date = document.createTextNode(`Ano de lançamento: ${dados_filme.results[i].release_date}`);
        var media_avaliacao = document.createTextNode(`Avaliação: ${dados_filme.results[i].vote_average}`)
        var texto_sumario = document.createTextNode("Overview");
        titulo.appendChild(title);
        paragrafo2.appendChild(overview);
        linguaOri.appendChild(original_language);
        dataLan.appendChild(release_date);
        avaliacao.appendChild(media_avaliacao);
        sumario.appendChild(texto_sumario);
        detalhes.appendChild(sumario);
        detalhes.appendChild(paragrafo2);

        //Definindo os atributos dos elementos criados:
        titulo.setAttribute('class', 'titulo');
        paragrafo2.setAttribute('class', 'overview');
        divContainer.setAttribute('class', 'card');
        divDescription.setAttribute('class', 'description');

        //Incluindo os elementos dentro da divDescriptions:
        divDescription.appendChild(titulo);
        divDescription.appendChild(detalhes);
        divDescription.appendChild(linguaOri);
        divDescription.appendChild(dataLan);
        divDescription.appendChild(avaliacao);


        //Incluindo os elementos dentro da divContainer:
        divContainer.appendChild(img);
        divContainer.appendChild(divDescription);

        //Enviando os elementos para o body::
        document.querySelector(".container").appendChild(divContainer);

    }
}
