import { getCSS, tickConfig } from "./common.js";

async function quantidadePopulacaoPorPais() {
    const url = 'https://restcountries.com/v3.1/all';
    const res = await fetch(url);
    const dados = await res.json();
    const nomeDosPaises = dados.map(pais => pais.name.common);
    const populacao = dados.map(pais => pais.population);

    const data = [
        {
            x: nomeDosPaises,
            y: populacao,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'População por País',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Países',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'População',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

quantidadePopulacaoPorPais();
