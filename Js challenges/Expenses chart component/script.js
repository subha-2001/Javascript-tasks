const barchart = document.getElementById("barchart");

new Chart(barchart, {
    type: 'bar',
    data: {
        labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        datasets: [
            {
                data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
                backgroundColor: [
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(186, 34%, 60%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                    'hsl(10, 79%, 65%)',
                ],
                borderWidth: 0,
                borderRadius: 5,
            },
        ],
    },
    options: {
        scales: {
            x:
            {
                grid: {
                    display: false
                }
            },
            y: {
                display: false
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (content) {
                        let name = content.dataset.data[content.dataIndex];
                        return "$" + name;
                    },
                    labelColor: function () {
                        return {
                            borrderColor: "transparent",
                            backgroundColor: "transparent",

                        };
                    },
                },
                displayColors: false
            }
        }
    }
    });