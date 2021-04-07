const alertBanner = document.querySelector('#alert');
const trafficCanvas = document.querySelector('#traffic-chart')
const dailyCanvas = document.querySelector('#daily-chart')
const mobileCanvas = document.querySelector('#mobile-chart')


alertBanner.innerHTML =
`
<div class="alert-banner">
<p><strong>Alert:</strong> You have overdue tasks to complete </p> <p class="alert-banner-close">X</p>
</div>
`

alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alert.style.display = "none"
    }
});

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3","4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500],
    fill: true,
    backgroundColor: '#bb86fc',
    borderWidth: 1,

    }]
};

let trafficOptions = {
    aspectRatio: 2.5,
    responsive: true,
    animation: {
        duration: 5
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend : {
        display: false
    }
};


let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

const dailyData = {
    labels: ["S", "M", "T", "W" , "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#bb86fc',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    },
    legend: {
        display: false
    }
}

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

const mobileData = {
    labels: ["Desktop", "Tablet", "Phons"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxwidth: 20,
            fontStyle: 'bold'
        }
    }
}

let mobileChart = new Chart(mobileCanvas,  {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

    
    