const url = 'https://restcountries.com/v3.1/all';

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();
    const totalPaises = dados.length;
    const totalPopulacao = dados.reduce((acc, pais) => acc + pais.population, 0);

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `O mundo tem <span>${totalPaises}</span> países e a população total é de aproximadamente <span>${(totalPopulacao / 1e9).toFixed(2)} bilhões</span>.`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();
