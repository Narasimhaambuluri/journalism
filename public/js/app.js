

function loadChart(){

    console.log('loaded')

Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: '',
        align: 'left'
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Mood',
            data: [406292, 260000, 107000, 68300, 27500, 14500]
        },
    ]
});

}
