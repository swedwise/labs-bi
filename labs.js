/**
 * Created by hbldh on 2016-02-08.
 */


$( document ).ready(function() {

    $('#first-slide-id').highcharts({
        "chart": {
            "type": "column"
        },
        "legend": {
            "enabled": true
        },
        "plotOptions": {
            "column": {
                "borderWidth": 0,
                "dataLabels": {
                    "enabled": true,
                    "style": {
                        "fontSize": "10px",
                        "fontWeight": "bold"
                    }
                },
                "pointPadding": 0}
        },
        "series": [
            {"data": [24, 16, 42, 30, 10, 21, 9], "name": "Webstore", "color": "#7293cb"},
            {"data": [21, 17, 35, 31, 21, 32, 25], "name": "Store, Stockholm", "color": "#e1974c"},
            {"data": [6, 8, 21, 15, 10, 14, 12], "name": "Store, Göteborg", "color": "#d35e56"}
        ],
        "title": {
            "text": "Total number of sales during 7 days: 420"
        },
        "subtitle": {
            "text": "Data presented by sales channel"
        },
        "xAxis": {
            "categories": [
                "Thursday<br>25/02",
                "Friday<br>26/02",
                '<span style="color: #d35e56">Saturday</span><br><span style="color: #d35e56">27/02</span>',
                '<span style="color: #d35e56">Sunday</span><br><span style="color: #d35e56">28/02</span>',
                "Monday<br>29/02",
                "Tuesday<br>1/03",
                "Wednesday<br>2/03"]},
        "yAxis": {
            "min": 0,
            "title": {
                "text": "Number of sales"}}
    });

    // Blue "#7293cb"
    // Orange: "#e1974c"
    // Green: "#84ba5b"
    // Red "#d35e56"
    // Grey "#808585"

    $('#second-slide-id').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Sales by category'
        },
        subtitle: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Category',
            colorByPoint: true,
            data: [{
                name: 'Stationary',
                y: 56.33
            }, {
                name: 'Pens',
                y: 24.03,
                sliced: true,
                selected: true
            }, {
                name: 'Printer paper',
                y: 10.38
            }, {
                name: 'Ink',
                y: 4.77
            }, {
                name: 'Crayons',
                y: 0.91
            }, {
                name: 'Others',
                y: 0.2
            }]
        }]
    });

    $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=usdeur.json&callback=?', function (data) {
        $('#third-slide-id').highcharts({
            chart: {
                zoomType: 'x'
            },
            title: {
                text: 'USD to EUR exchange rate over time'
            },
            subtitle: {
                text: document.ontouchstart === undefined ?
                        'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
            },
            xAxis: {
                type: 'datetime'
            },
            yAxis: {
                title: {
                    text: 'Exchange rate'
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                area: {
                    fillColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, Highcharts.getOptions().colors[0]],
                            [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                        ]
                    },
                    marker: {
                        radius: 2
                    },
                    lineWidth: 1,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    threshold: null
                }
            },

            series: [{
                type: 'area',
                name: 'USD to EUR',
                data: data
            }]
        });
    });

    // Activate the carousel.
    $('#the-carousel').carousel({
        pause: false,
        interval: 10000
    });

    $('#playButton').click(function () {
        $('#the-carousel').carousel('cycle');
    });
    $('#pauseButton').click(function () {
        $('#the-carousel').carousel('pause');
    });

    $('#the-carousel').on('slid.bs.carousel', function () {
        $(".labs-highcharts-container").each(function(index) {
            $( this ).highcharts().reflow();
        });
    });

});
