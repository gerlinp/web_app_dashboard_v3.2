const alertBanner = document.querySelector('#alert');
const dailyCanvas = document.querySelector('#daily-chart');
const mobileCanvas = document.querySelector('#donut-graph');
const user = document.querySelector('#userfield');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send')
let trafficCanvas = document.querySelector('#trafficChart');
Chart.defaults.scale.gridLines.color = "#ddd"

alertBanner.innerHTML = `
    <div class="alert-banner">
        <p class='floatLeft'><strong>Alert:</strong> You have unread messages</p>
        <p class="alert-banner-close floatRight">x</p>
    </div>`;

    alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display = "none"
    }
});

let trafficData = {
    labels:['16-22', '23-29', '30-5', '6-12', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
    datasets:[{
        data:[750,1250,1000,2000,1500,1750,1250,1850,2250,1500,2500],
        backgroundColor:'rgba(178, 117, 252, 1)',
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: '#bb86fc',
    }]
};


let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
            }
        }]
    },
    legend: {
        display: false
    }
};


let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});



const dailyData = {
    labels: ['S','M','T','W','T','F','S'],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125,225,200,100],
        backgroundColor:'rgba(178, 117, 252, 1)',
        borderWidth: 1,
        hoverBorderWidth: 3,
        hoverBorderColor: '#bb86fc',
    }]
};
const dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
            }
        }]
    },
    legend : {
        display: false
    }
}
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});


const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#bb86fc',
            '#82c98f',
            '#51b6c8'
        ]
    }] 
};

const mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold'
        }
    }
}
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
}); 

send.addEventListener('click', () => {
    if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
    } else if (user.value === "") {
        alert("Please fill out user field before sending");    
    } else if (message.value === "") {
        alert("Please fill out message field before sending");
    } else {
        alert(`Message successfully sent to: ${user.value}`);
    }
});

 