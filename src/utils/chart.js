function showChart(type,data){
    return {
        type,
        data: {
            labels: ['Chocolatos', 'Ultra Milk', 'Bear Brand'],
            datasets: [{
                label: '',
                data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Top Items'
                }
            }
        }
    }
}

function lineChart(data){
    return {
        type: 'line',
        data: {
            labels: ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'],
            datasets: [{
            label: 'keuntungan penjualan',
            data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
            }]
        }

    }
}

export default {showChart,lineChart}
