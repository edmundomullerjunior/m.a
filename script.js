// Dados para o primeiro gráfico: emissões de CO2
const ctx1 = document.getElementById('chart1').getContext('2d');
const chart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
        datasets: [{
            label: 'Emissões de CO2 (milhões de toneladas)',
            data: [35000, 36000, 37000, 38000, 39000, 37000, 36000],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Emissões de CO2 Globais (2015-2021)'
            }
        }
    }
});

// Dados para o segundo gráfico: desmatamento
const ctx2 = document.getElementById('chart2').getContext('2d');
const chart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Amazônia', 'África Central', 'Sudeste Asiático'],
        datasets: [{
            label: 'Perda de Florestas (milhões de hectares)',
            data: [2.3, 1.5, 0.9],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Desmatamento por Região (Última Década)'
            }
        }
    }
});
