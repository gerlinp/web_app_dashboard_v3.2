const alertBanner = document.querySelector('#alert');
const trafficCanvas = document.querySelector('#traffic-chart')
const dailyCanvas = document.querySelector('#daily-chart')
const mobileCanvas = document.querySelector('#mobile-chart')
const traffic = document.querySelector('#traffic')

//-------------- ALERT BANNER---------------//
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


//-------------- Traffic Chart---------------//

let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12" , "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        label: '# of Hits',
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500], 
        fill:true,
        backgroundColor: '#bb86fc',
        borderWidth: 1
    }]
};

let trafficDaily = {
    labels: ["16-22", "23-29", "30-5", "6-12" , "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        label: '# of Hits',
        data: [807, 1331, 2623, 2728, 2432, 1050, 588, 2676, 2381, 2990, 629], 
        fill:true,
        backgroundColor: '#bb86fc',
        borderWidth: 1
    }]
};

let trafficWeekly = {
    labels: ["16-22", "23-29", "30-5", "6-12" , "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        label: '# of Hits',
        data: [2460, 979, 1211, 876, 1567, 657, 1250, 1275, 2749, 2697, 770], 
        fill:true,
        backgroundColor: '#bb86fc',
        borderWidth: 1
    }]
};

let traffiMonthly = {
    labels: ["16-22", "23-29", "30-5", "6-12" , "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        label: '# of Hits',
        data: [1403, 1975, 1515, 866, 1988, 2207, 739, 2339, 2250, 2416, 1520], 
        fill:true,
        backgroundColor: '#bb86fc',
        borderWidth: 1
    }]
};

let trafficOptions = {
    responsive: true,
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


// trafficData = 
// when a radio button is clicked 
//     checkRadioButtons
//     return checked
    
traffic.addEventListener('click', e =>  {
    let chart = e.target.innerHTML;
    console.log(chart);    
});


//-------------- Daily Chart---------------//
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

//-------------- Daily Chart---------------//

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
        position: 'bottom',
        labels: {
            fontColor: "white",
            boxWidth: 20,
            padding: 20
        }
    }
}

let mobileChart = new Chart(mobileCanvas,  {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

    
    